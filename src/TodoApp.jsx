import React from "react";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import TodoDialog from "./TodoDialog";
import TodoImage from "./TodoImage";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //need below all since its "state"
      todos: [],
      /*best practice:remove it if you can to keep "state" minimal 
      and still use todos.length to get the value anyway*/
      totalNum: 0,
      inputValue: ""
    };
  }
  //need below methods since its not "props"
  onRemove = (index, e) => {
    const todos = this.state.todos; //note its not a "deepClone"
    todos.splice(index, 1);
    this.setState({
      todos: todos, //don't need this since its not "deepClone"
      totalNum: this.state.totalNum - 1
    });
  };
  onEdit = (index, e) => {
    const todos = this.state.todos; //note its not a "deepClone"
    this.setState({
      todos: todos, //don't need this since its not "deepClone"
      totalNum: this.state.totalNum - 1,
      inputValue: todos[index].name
    });
    todos.splice(index, 1); //no need setState since its not 'deepClone"
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
      todos: todos, //don't need this since its not "deepClone"
      totalNum: this.state.totalNum + 1,
      inputValue: ""
    });
    e.preventDefault();
    e.stopPropagation();
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
          checked={false}
          todos={this.state.todos}
          onRemove={this.onRemove}
          onEdit={this.onEdit}
          totalNum={this.state.totalNum}
          putSomethingIn={() => <TodoImage />}
        />
        <hr />
        <h5>Below items do not belong to To-Do App</h5>
        {/* just a demo for multiple select in react */}
        <label for="muti-select">Multiple-Select</label>
        <select id="multi-select" multiple={true} value={["lime", "mango"]}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </div>
    );
  }
}

export default TodoApp;
