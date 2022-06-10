import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { AppRoute } from 'src/routes/AppRoute';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <div className="App">
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoute />
      </BrowserRouter>
    </QueryClientProvider>
  </div>
);

export default App;
