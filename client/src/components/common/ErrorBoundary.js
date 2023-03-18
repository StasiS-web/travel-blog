import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container">
            <div className="row">
            <h1 className="text-center text-danger">Something went wrong.</h1>
            </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
