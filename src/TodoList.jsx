import React from "react";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }
  onClick() {}
  render() {
    return (
      <ul>
        {this.props.totalNum}
        {this.props.todos.map((i, index) => (
          <li key={i.id}>
            {i.name}
            <button key={i.id} onClick={this.props.onClick} value={i.name}>
              Del
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
