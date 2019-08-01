import React from "react";
import ErrorIndicator from "../ErrorIndicator";

interface IErrorBoundryState {
  hasError: boolean;
}

export default class ErrorBoundry extends React.Component<
  {},
  IErrorBoundryState
> {
  state = {
    hasError: false
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}
