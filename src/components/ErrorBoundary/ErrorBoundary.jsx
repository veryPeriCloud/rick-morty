import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError error", error.message)
    return {
      hasError: true,
    }
  }
  componentDidCatch(error, errorInfo) {
    console.error("error", error.message);
    console.error("errorInfo", errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center items-center min-h-screen w-full">
          <h4 className="font-bold text-2xl text-red-400">Что-то пошло не так!</h4>
        </div>
      )      
    }
    return this.props.children;
  }
}