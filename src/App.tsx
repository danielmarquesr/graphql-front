import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { AppRoute } from './routes/AppRoute';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <div className="App">
    <BrowserRouter>
      <ScrollToTop />
      <AppRoute />
    </BrowserRouter>
  </div>
);

export default App;
