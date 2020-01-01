import React, { Component } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

let id = 0;
export default class TodoList extends Component {
  state = {
    todos: []
  };

  componentDidUpdate(prevprops, prevState) {
    console.log(prevState);
  }

  add_todo = content => {
    //let oldTodos = this.state.todos.slice();
    //oldTodos.push({ content: content, isComopleted: false });
    this.setState({
      todos: [...this.state.todos, { content: content, isCompleted: false }]
    });
  };

  delete_todo = i => {
    delete this.state.todos[i];
    this.setState({});
  };

  modify_todo = (newValue, index) => {
    this.state.todos[index].content = newValue;
    this.setState({});
  };

  complete_todo = i => {
    this.state.todos[i].isCompleted = true;
    this.setState({});
  };

  alertHi = () => {
    alert("Hi");
  };

  render() {
    return (
      <div className="">
        <AddTodo add_todo={this.add_todo} />
        <h2>Todo List</h2>
        {this.state.todos.map((val, index) => {
          return (
            <Todo
              data={val}
              index={index}
              modify_todo={this.modify_todo}
              delete_todo={this.delete_todo}
              complete_todo={this.complete_todo}
            />
          );
        })}
      </div>
    );
  }
}
