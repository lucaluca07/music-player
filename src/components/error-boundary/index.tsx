import React from "react";
import PageFailed from "@/components/failed-page";

interface IProps {}
interface IState {
  hasError: boolean;
}

interface Error {
  stack?: string;
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentWillUnmount() {
    this.setState = () => {
      return;
    };
  }
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <PageFailed msg="加载失败，请点击重试" />;
    }
    return this.props.children;
  }
}
