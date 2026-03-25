import * as React from "react";

class ProductErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  } //gives us all the information about the error and where it happened in the component tree.

  componentDidCatch(error, info) {
    console.error("Error:", error.message, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Could not load products.</h2>
          <p>Please try again.</p>
          <button onClick={this.handleRetry}>Retry</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ProductErrorBoundary;
