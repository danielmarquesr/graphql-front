import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/App.css';
import { AppRoute } from './routes/AppRoute';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </div>
);

export default App;
