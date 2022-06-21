import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppRoute } from 'src/routes/AppRoute';
import theme from './theme';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <div className="App">
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          <AppRoute />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </div>
);

export default App;
