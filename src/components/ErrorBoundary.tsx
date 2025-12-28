import { Component } from "react";
import type { ReactNode } from "react";

export default class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="p-4 text-red-600">Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
