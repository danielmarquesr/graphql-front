import React, { Component, ReactNode } from 'react';
import { GraphQLError } from 'src/relay/fetchGraphQL';

interface Props {
  children: ReactNode;
  fallback: (error: GraphQLError) => JSX.Element;
}

interface State {
  error: GraphQLError | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: GraphQLError): State {
    return { error };
  }

  render() {
    const { children, fallback } = this.props;
    const { error } = this.state;

    if (error) return fallback(error);

    return children;
  }
}
