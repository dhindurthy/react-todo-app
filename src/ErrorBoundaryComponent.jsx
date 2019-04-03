import React from "react";

{
  /* Change the  "source" to a non string value 
  in TodoList component being ued in TodoApp 
  to see ErrorBoundary in action */
}

class ErrorBoundaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    this.setState({
      errorMessage: error.message,
      errorArea: info.componentStack
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <React.Fragment>
          <h5 className="error-heading">
            Error "{this.state.errorMessage}" at this location
          </h5>
          <p className="error-heading">{this.state.errorArea}}</p>
        </React.Fragment>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundaryComponent;
