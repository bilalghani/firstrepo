import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    data: this.props.data,
    index: this.props.index
  };

  handleToggleEdit = () => {
    this.setState({ isEditable: !this.state.isEditable });
  };

  handleDelete = e => {
    e.preventDefault();
    this.props.delete_todo(this.props.index);
  };

  handleComplete = e => {};
  submit = e => {
    e.preventDefault();
    const txt = e.target.elements["updated"].value;
    this.handleToggleEdit();

    this.props.modify_todo(txt, this.props.index);
  };
  render(props) {
    if (this.state.isEditable)
      return (
        <div>
          <form onSubmit={this.submit}>
            <input type="text" name="updated" />

            <button type="submit">UPDATE</button>
          </form>
        </div>
      );
    return (
      <div>
        <p style={{ display: "inline-block", textDecoration: "line-through" }}>
          {this.state.data.content}
        </p>
        <button onClick={this.handleToggleEdit}>EDIT</button>
        <button onClick={this.handleDelete}>DELETE</button>
        <button>Completed</button>
      </div>
    );
  }
}
