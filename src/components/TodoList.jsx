import React, { Component } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
let id = 0;
export default class TodoList extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    let local = JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
    this.setState({ todos: local });
  }
  componentDidUpdate(prevprops, prevstate) {
    console.log(this.state.todos);
    if (JSON.stringify(this.state.todos) !== JSON.stringify(prevstate)) {
      let st = this.state.todos;
      localStorage.setItem("todos", JSON.stringify(st));
    }
  }
  add_todo = content => {
    //let oldTodos = this.state.todos.slice();
    //oldTodos.push({ content: content, isComopleted: false });

    this.setState({
      todos: [
        ...this.state.todos,
        { content: content, isCompleted: false, id: id++ }
      ]
    });
  };

  delete_todo = i => {
    // delete this.state.todos[i];
    // this.setState({});

    this.state.todos.splice(i, 1);
    this.setState({ todos: this.state.todos });
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
        <AddTodo add_todo={this.add_todo} data={this.state.todos} />
        <h2>Todo List</h2>
        {this.state.todos.map((val, index) => {
          return (
            <Todo
              data={val}
              key={val.id}
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
