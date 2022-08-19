import React from 'react';
import ReactDOM from 'react-dom/client';
// React Router
import { BrowserRouter } from "react-router-dom";
// Styles
import './index.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import App from './App';
// Redux
import { store } from './@store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);