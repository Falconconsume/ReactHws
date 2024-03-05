import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setState({
        cities: [...this.state.cities, "Charkiv"],
        color: "lightpink",
      });
    }, 1000);
  }

  state = { ...this.props };

  render() {
    const { cities = [], color } = this.state;

    return cities.length ? (
      <ul style={{ backgroundColor: color }}>
        {this.state.cities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : null;
  }
}
