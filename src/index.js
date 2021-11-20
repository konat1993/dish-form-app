import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import FormContextProvider from "./context/FormContextProvider";

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);