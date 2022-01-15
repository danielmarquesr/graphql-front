import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback: any;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    const { children, fallback } = this.props;
    const { error } = this.state;

    if (error) return React.createElement(fallback, { error });

    return children;
  }
}
