import React, { Component } from "react";

export default class AddTodo extends Component {
  onsubmit = e => {
    e.preventDefault();
    const text = e.target.elements["valueText"].value;
    this.props.add_todo(text);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onsubmit}>
          <h1>add Todo</h1>
          <input type="text" name="valueText" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
