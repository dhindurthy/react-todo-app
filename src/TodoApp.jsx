import React from "react";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import TodoDialog from "./TodoDialog";
import TodoImage from "./TodoImage";
import { TodoThemeContext, themes } from "./TodoThemeContext";
import ErrorBoundaryComponent from "./ErrorBoundaryComponent";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    this.state = {
      //need below all since its "state"
      todos: [],
      /*best practice:remove it if you can to keep "state" minimal 
      and still use todos.length to get the value anyway*/
      totalNum: 0,
      inputValue: "",
      theme: themes.dark //needs to be handled by 'state' for rendering purpose
    };
  }
  //need below methods since its not "props"
  onRemove = (index, e) => {
    const todos = this.state.todos; //note its not a "deepClone"
    // const todos = Object.assign(this.state.todos);
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
    this.inputElement.current.focus(); //DOM refs
    todos.splice(index, 1); //no need setState since its not 'deepClone"
  };
  //need below method since its not "props"
  onChange = e => {
    // getting value of the input from its "ref" instead of "e" object
    this.setState({ inputValue: this.inputElement.current.value });
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
  toggleTheme = () => {
    /*copied from react website */
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };
  render() {
    return (
      <TodoThemeContext.Provider value={this.state.theme}>
        <section>
          <button
            onClick={this.toggleTheme}
            style={{
              backgroundColor: this.state.theme.background,
              color: this.state.theme.foreground
            }}
          >
            Toggle Theme (only buttons for now)
          </button>

          {/* The below will throw an error because "strictMode" is being used.
            Look in console, it will ask you to use "componentDidMount" in the component*/}
          <React.StrictMode>
            <TodoDialog>
              <TodoAdd
                inputValue={this.state.inputValue}
                onClick={this.onAdd}
                onChange={this.onChange}
                textInputRef={this.inputElement}
              />
            </TodoDialog>

            {/* Change the below "source" to a non string value 
              to see ErrorBoundary in action */}
            <ErrorBoundaryComponent>
              <TodoList
                checked={false}
                todos={this.state.todos}
                onRemove={this.onRemove}
                onEdit={this.onEdit}
                totalNum={this.state.totalNum}
                putSomethingIn={() => (
                  <TodoImage source={"https://picsum.photos/200/300/?random"} />
                )}
              />
            </ErrorBoundaryComponent>
          </React.StrictMode>
          <hr />
          <h5>Below items do not belong to To-Do App</h5>
          {/* just a demo for multiple select in react */}
          <label htmlFor="muti-select">Multiple-Select</label>
          <select
            id="multi-select"
            multiple={true}
            value={["lime", "mango"]}
            onChange={function() {}}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          {/* <ErrorBoundaryComponent>
            <TodoImage source={qwerty}/>
          </ErrorBoundaryComponent> */}
        </section>
      </TodoThemeContext.Provider>
    );
  }
}

export default TodoApp;
