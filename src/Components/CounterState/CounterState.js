import React, { Component } from "react";

export default class CounterState extends Component {
  state = {
    counter: 0,
    intervall: null,
    count: 0,
  };
  componentDidMount() {
    this.setState({
      intervall: setInterval(
        () => this.setState({ counter: this.state.counter + 1 }),
        2000
      ),
    });
  }
  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div>
        <h1>Counter {this.state.counter}</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div onClick={this.decrement}>-</div>
          <h1>{this.state.count}</h1>
          <div onClick={this.increment}>+</div>
        </div>
      </div>
    );
  }
}
