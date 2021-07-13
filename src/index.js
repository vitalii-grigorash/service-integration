import React from 'react';
import { hydrate, render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';

const APP = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
