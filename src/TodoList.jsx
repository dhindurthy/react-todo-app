import React from "react";
class TodoList extends React.Component {
  componentDidMount() {
    //called when component is mounted to the DOM for the first time
    console.log("componentDidMount TodoList");
  }

  componentDidUpdate() {
    //called every time this component is updated
    console.log("componentDidUpdate TodoList");
  }

  componentWillUnmount() {
    //called right before component is un-mounted from the DOM
    console.log("componentWillUnmount TodoList");
  }

  constructor(props) {
    super(props);
    this.state = {
      //todos:[]//dont need this since its "props"
      //totalNum:''//dont need this since its "props"
    };
    //this.onRemove = this.onRemove.bind(this);//no need as its "props"
    //this.onEdit = this.onEdit.bind(this);//no need as its "props"
  }
  //onRemove() {}//no need as its "props"
  //onEdit() {}//no need as its "props"
  render() {
    return (
      <ul>
        {this.props.totalNum}
        {this.props.todos.map((i, index) => (
          <li className="list-item" key={i.id}>
            {i.name}
            <button key={i.id} onClick={this.props.onRemove} value={i.id}>
              Del
            </button>
            <button key={i.index} onClick={this.props.onEdit} value={i.id}>
              Edi
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
