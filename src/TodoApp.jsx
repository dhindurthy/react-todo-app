import React from "react";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import TodoDialog from "./TodoDialog";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //need below all since its "state"
      todos: [],
      totalNum: 0,
      inputValue: ""
    };
  }
  //need below methods since its not "props"
  onRemove = e => {
    const todos = this.state.todos; //note its not a "deepClone"
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id === Number(e.target.value)) {
        todos.splice(i, 1);
      }
    }
    this.setState({
      //todos: todos,//don't need this since its not "deepClone"
      totalNum: this.state.totalNum - 1
    });
  };
  onEdit = e => {
    const todos = this.state.todos; //note its not a "deepClone"
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id === Number(e.target.value)) {
        this.setState({
          //todos: todos,//don't need this since its not "deepClone"
          totalNum: this.state.totalNum - 1,
          inputValue: todos[i].name
        });
        todos.splice(i, 1); //no need setState since its not 'deepClone"
      }
    }
  };
  //need below method since its not "props"
  onChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  onAdd = e => {
    const todos = this.state.todos; //note its not a "deepClone"
    todos.push({
      name: this.state.inputValue,
      id: Math.floor(Math.random() * 101)
    });
    this.setState({
      //todos: todos,//don't need this since its not "deepClone"
      totalNum: this.state.totalNum + 1,
      inputValue: ""
    });
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <TodoDialog>
          <TodoAdd
            inputValue={this.state.inputValue}
            onClick={this.onAdd}
            onChange={this.onChange}
          />
        </TodoDialog>
        <TodoList
          todos={this.state.todos}
          onRemove={this.onRemove}
          onEdit={this.onEdit}
          totalNum={this.state.totalNum}
        />
      </div>
    );
  }
}

export default TodoApp;
