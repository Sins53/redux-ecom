import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.scss'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store";


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store} >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


