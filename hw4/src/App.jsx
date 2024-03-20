import { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: "",
      newTodo: {
        title: "",
        completed: false,
      },
    };
  }

  async componentDidMount() {
    try {
      const request = await fetch("https://jsonplaceholder.typicode.com/todos");
      const response = await request.json();
      const listTodos = response.slice(0, 20);

      this.setState({ list: listTodos });
    } catch (err) {
      console.log(err);
    }
  }

  async handleDelete(id) {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      });
      this.setState((prevState) => ({
        list: prevState.list.filter((item) => item.id !== id),
      }));
    } catch (err) {
      console.log(err);
    }
  }

  async handleCheckBox(item) {
    try {
      const request = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${item.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            title: item.title,
            completed: !item.completed,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const response = await request.json();
      this.setState((prevState) => ({
        list: prevState.list.map((e) => (e.id === response.id ? response : e)),
      }));
    } catch (err) {
      console.log(err);
    }
  }

  async setInputValue(event, id) {
    event.preventDefault();
    this.setState({ inputValue: event.target.value });

    try {
      const request = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({ title: event.target.value }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const response = await request.json();

      this.setState((prevState) => ({
        list: prevState.list.map((item) =>
          item.id === response.id ? response : item
        ),
      }));
    } catch (err) {
      console.log(err);
    }
  }

  async handleSubmit(e, id) {
    e.preventDefault();
    try {
      const request = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({ title: this.state.inputValue }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const response = await request.json();
      this.setState((prevState) => ({
        list: prevState.list.map((item) =>
          item.id === response.id ? response : item
        ),
      }));
    } catch (err) {
      console.log(err);
    }
  }

  handleTitle(e) {
    this.setState((prevState) => ({
      newTodo: { ...prevState.newTodo, title: e.target.value },
    }));
  }

  handleCompleted(e) {
    this.setState((prevState) => ({
      newTodo: { ...prevState.newTodo, completed: e.target.checked },
    }));
  }

  async handleSubmitAddTodo(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(this.state.newTodo),
        }
      );
      const json = await response.json();

      this.setState((prevState) => ({
        list: [...prevState.list, json],
      }));
      this.handleSubmit(e, json.id);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { list, newTodo } = this.state;

    return (
      <>
        <form
          className="formAddTodo"
          onSubmit={this.handleSubmitAddTodo.bind(this)}
        >
          <label>
            Title:{" "}
            <input
              type="text"
              defaultValue={newTodo.title}
              onChange={this.handleTitle.bind(this)}
            />
          </label>
          <label>
            Completed:{" "}
            <input
              type="checkbox"
              defaultValue={newTodo.completed}
              onChange={this.handleCompleted.bind(this)}
            />
          </label>
          <button>Add todo</button>
        </form>
        {list.length ? (
          <ul>
            {list.map((item) => (
              <li className="list" key={item.id}>
                <form
                  className="form"
                  onSubmit={(e) => this.handleSubmit(e, item.id)}
                >
                  {item.title}{" "}
                  <input
                    type="checkbox"
                    defaultChecked={item.completed}
                    onChange={() => this.handleCheckBox(item)}
                  />
                  <input
                    type="text"
                    onChange={(e) => this.setInputValue(e, item.id)}
                  />
                  <button type="submit">Submit</button>
                  <button
                    type="button"
                    onClick={() => this.handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </form>
              </li>
            ))}
          </ul>
        ) : null}
        ;
      </>
    );
  }
}

export default App;
