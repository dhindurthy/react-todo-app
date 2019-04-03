import React from "react";

// Comapre a Class based component with a Fuinction based component.
// Use function based component if your component does not have a state
// Also called stateless component here

// class TodoImage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   //usage of props.putAnythingIn; smilar to "yield" in EmberJS
//   render() {
//     return (
//       <img
//         alt="random-img"
//         src={this.props.source}
//         height="50px"
//         width="120px"
//       />
//     );
//   }
// }

function TodoImage(props) {
  return (
    <img alt="random-img" src={props.source} height="50px" width="120px" />
  );
}

export default TodoImage;
