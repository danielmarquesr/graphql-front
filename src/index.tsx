import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { RelayEnvironmentProvider } from 'react-relay';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RelayEnvironment from './relay/RelayEnvironment';

ReactDOM.render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RelayEnvironmentProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
