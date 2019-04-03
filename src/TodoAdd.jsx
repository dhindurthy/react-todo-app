import React from "react";
import { TodoThemeContext } from "./TodoThemeContext";

class TodoAdd extends React.Component {
  componentDidMount() {
    //called when component is mounted to the DOM for the first time
    console.log("componentDidMount TodoAdd");
  }
  componentDidUpdate() {
    //called every time this component is updated
    console.log("componentDidUpdate TodoAdd");
    console.log(this.context);
  }
  componentWillUnmount() {
    //called right before component is un-mounted from the DOM
    console.log("componentWillUnmount TodoAdd");
  }
  constructor(props) {
    super(props);
    this.textInput = React.createRef(); //DOM refs
    this.state = {
      //inputValue: ""//dont need since its "props"
    };
    //this.onChange=this.onChange.bind(this);//no need as its "props"
    //this.onClick=this.onClick.bind(this);//no need as its "props"
  }
  //onChange() {}//no need method as its "props"
  //onClick() {}//no need methiod as its "props"
  render() {
    let theme = this.context;
    //this component now has "context" coz we are importing "createContext" on top
    //and assigning it to "contextType" of this component at the bottom
    //The value will change as the "value" for nearest ancestral
    //ThemeContext.Provider's "value" changes - TodoApp has it in this case
    return (
      <form>
        <label htmlFor="add-item">Add item</label>
        <input
          id="add-item"
          value={this.props.inputValue}
          onChange={this.props.onChange}
          ref={this.props.textInputRef}
        />
        <button
          type="submit"
          onClick={this.props.onClick}
          style={{
            backgroundColor: this.context.background,
            color: theme.foreground
          }}
        >
          Add
        </button>
      </form>
    );
  }
}

TodoAdd.contextType = TodoThemeContext;
export default TodoAdd;
