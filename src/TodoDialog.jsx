import React from "react";

// Comapre a Class based component with a Fuinction based component.
// Use function based component if your component does not have a state
// Also called stateless component here

// class TodoDialog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   //usage of props.children; smilar to "yield" in EmberJS
//   render() {
//     return <section className="todo-dialog">{this.props.children}</section>;
//   }
// }

function TodoDialog(props) {
  return <section className="todo-dialog">{props.children}</section>;
}

export default TodoDialog;
