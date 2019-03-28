import React from "react";
class TodoDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //usage of props.children; smilar to "yield" in EmberJS
  render() {
    return <section className="todo-dialog">{this.props.children}</section>;
  }
}

export default TodoDialog;
