import React, { Component, Children, ErrorInfo, ReactNode } from "react";
import { Redirect } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Redirect to="/500" />;
    }
    return Children.only(this.props.children);
  }
}

export { ErrorBoundary };
