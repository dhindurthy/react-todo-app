import React from "react";
class TodoAdd extends React.Component {
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
        <input value={this.props.inputValue} onChange={this.props.onChange} />
        <button type="submit" onClick={this.props.onClick}>
          Add
        </button>
      </form>
    );
  }
}

export default TodoAdd;
