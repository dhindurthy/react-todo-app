import React from "react";
class TodoImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //usage of props.putAnythingIn; smilar to "yield" in EmberJS
  render() {
    return (
      <img
        alt="rand-img"
        src="http:\/\/randomfox.ca\/images\/59.jpg"
        height="50px"
        width="120px"
      />
    );
  }
}

export default TodoImage;
