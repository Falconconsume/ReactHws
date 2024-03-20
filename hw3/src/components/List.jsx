import { Component } from "react";
import "./list.scss";

export default class List extends Component {
  state = { list: this.props.list, hilightedIndex: [], borderTable: false };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.state.list.length);
      const shouldAddBorder =
        this.state.hilightedIndex.length >=
        Math.floor(this.state.list.length / 2);
      const changeBorder =
        this.state.hilightedIndex.length === this.state.list.length;

      this.setState((prevState) => ({
        hilightedIndex: [...prevState.hilightedIndex, randomIndex],
        borderTable: shouldAddBorder,
        changeBorderTable: changeBorder
          ? !prevState.changeBorderTable
          : prevState.changeBorderTable,
      }));
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const {
      list = [],
      hilightedIndex = [],
      borderTable,
      changeBorderTable,
    } = this.state;
    return list.length ? (
      <table
        style={
          borderTable
            ? changeBorderTable
              ? { border: "20px solid black" }
              : { border: "10px solid black" }
            : null
        }
      >
        <tbody>
          {list.map((animal = {}, index) => (
            <tr
              key={index}
              style={
                hilightedIndex.includes(index)
                  ? { color: "green", fontWeight: "700" }
                  : null
              }
            >
              <td>{animal.type}</td>
              <td>{animal.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : null;
  }
}
