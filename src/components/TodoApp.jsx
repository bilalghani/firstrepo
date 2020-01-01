import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default class TodoApp extends Component {
  render() {
    return (
      <div className="appContainers">
        <h1>appcontainer</h1>

        <TodoList />
      </div>
    );
  }
}
