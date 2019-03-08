import React from "react";
class TodoAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onChange() {}
  onAdd() {}

  render() {
    return (
      <form>
        <input value={this.props.inputValue} onChange={this.props.onChange} />
        <button type="submit" onClick={this.props.onAdd}>
          Add
        </button>
      </form>
    );
  }
}

export default TodoAdd;
