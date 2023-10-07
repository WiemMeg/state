import React, { Component } from "react";

export default class Test extends Component {
  state = {
    name: "Ahmed",
  };
  //create function
  handeleclick = () => this.setState({ name: "hedi" });
  render() {
    return (
      <div>
        hello,<div onClick={this.handeleclick}> {this.state.name}</div>
      </div>
    );
  }
}
