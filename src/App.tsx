import React, { Suspense, useEffect } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { AppRoute } from 'src/routes/AppRoute';
import RelayEnvironment from 'src/relay/environment';
import { ErrorBoundary } from 'src/components';
import { GraphQLError } from 'src/relay/fetchGraphQL';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return null;
};

const Error = ({ errors }: GraphQLError) => (
  <>
    <h2>Errors:</h2>
    <ul>
      {errors.map(({ message }) => (
        <li key={message}>{message}</li>
      ))}
    </ul>
  </>
);

const Content = () => (
  <ErrorBoundary fallback={Error}>
    <Suspense fallback="Loading...">
      <AppRoute />
    </Suspense>
  </ErrorBoundary>
);

const App = () => (
  <div className="App">
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <BrowserRouter>
        <ScrollToTop />
        <Content />
      </BrowserRouter>
    </RelayEnvironmentProvider>
  </div>
);

export default App;
