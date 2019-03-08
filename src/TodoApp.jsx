import React from "react";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      totalNum: "",
      inputValue: ""
    };
  }
  onClick = e => {
    const todos = this.state.todos;
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].name === e.target.value) {
        todos.splice(i, 1);
      }
    }
    this.setState({ totalNum: this.state.todos.length });
  };
  onChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  onAdd = e => {
    const todos = this.state.todos;
    const id = Math.floor(Math.random() * 101);
    const newItem = { name: this.state.inputValue, id: id };
    todos.push(newItem);
    this.setState({ todos: todos });
    this.setState({ inputValue: "" });
    this.setState({ totalNum: this.state.todos.length });
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <TodoAdd
          inputValue={this.state.inputValue}
          onAdd={this.onAdd}
          onChange={this.onChange}
        />
        <TodoList
          todos={this.state.todos}
          onClick={this.onClick}
          totalNum={this.state.totalNum}
        />
      </div>
    );
  }
}

export default TodoApp;
