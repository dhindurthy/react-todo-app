import React from "react";
class TodoDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section class="todo-dialog">
        {this.props.children} //to have "block" level usage of this Component
        //its like "yield" in EmberJS
      </section>
    );
  }
}

export default TodoDialog;
