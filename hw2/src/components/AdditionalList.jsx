import React, { Component } from "react";

export default class AdditionalList extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setState({
        cities: [...this.state.cities, "Charkiv"].sort((a, b) =>
          a.localeCompare(b)
        ),
        colors: [...this.state.colors].map(
          () => "#" + Math.floor(Math.random() * 1000).toString(16)
        ),
      });
    }, 3000);
  }

  state = { ...this.props };

  render() {
    const { cities = [], colors = [] } = this.state;

    return cities.length ? (
      <ul
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
      >
        {this.state.cities.map((item, index) => (
          <li
            style={{
              backgroundColor:
                colors[Math.floor(Math.random() * colors.length)],
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    ) : null;
  }
}
