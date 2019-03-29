import React from "react";
class TodoAdd extends React.Component {
  componentDidMount() {
    //called when component is mounted to the DOM for the first time
    console.log("componentDidMount TodoAdd");
  }

  componentDidUpdate() {
    //called every time this component is updated
    console.log("componentDidUpdate TodoAdd");
  }

  componentWillUnmount() {
    //called right before component is un-mounted from the DOM
    console.log("componentWillUnmount TodoAdd");
  }
  constructor(props) {
    super(props);
    this.state = {
      //inputValue: ""//dont need since its "props"
    };
    //this.onChange=this.onChange.bind(this);//no need as its "props"
    //this.onClick=this.onClick.bind(this);//no need as its "props"
  }
  //onChange() {}//no need method as its "props"
  //onClick() {}//no need methiod as its "props"
  render() {
    return (
      <form>
        <label for="add-item">Add item</label>
        <input
          id="add-item"
          value={this.props.inputValue}
          onChange={this.props.onChange}
        />
        <button type="submit" onClick={this.props.onClick}>
          Add
        </button>
      </form>
    );
  }
}

export default TodoAdd;
