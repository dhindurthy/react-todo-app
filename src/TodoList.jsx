import React from "react";

class TodoList extends React.Component {
  /*
  The below will throw an error because "strictMode" is being used.
  Look in console, it will ask you to use "componentDidMount"
  */
  componentWillMount() {
    // componentDidMount(){
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
      <React.Fragment>
        {this.props.totalNum}
        {/* {this.props.todos.length} - coud have used this instead of 
          above thing and avoid a "state" variable "totalNum"*/}

        <label htmlFor="checkbox" />
        <input
          id="checkbox"
          type="checkbox"
          checked={this.props.checked}
          onChange={function() {}}
        />
        {this.props.todos.length > 0 && (
          <ul>
            {this.props.todos.map((i, index) => (
              // "key" helps React decide which "li" items to re-render when the
              // array of list is updated by adding or deleting an item-performance
              <li className="list-item" key={i.id}>
                {i.name}
                <button
                  key={i.id}
                  onClick={this.props.onRemove.bind(this, index)}
                >
                  Del
                </button>
                <button
                  key={i.index}
                  onClick={this.props.onEdit.bind(this, index)}
                >
                  Edi
                </button>
              </li>
            ))}
          </ul>
        )}
        {/* usage of props.putAnythingIn; smilar to "yield" in EmberJS */}
        <h5>List Footer: {this.props.putSomethingIn()}</h5>
      </React.Fragment>
    );
  }
}

export default TodoList;
