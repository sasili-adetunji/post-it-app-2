import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
require('../node_modules/toastr/build/toastr.min.css');
import PostItStore from './stores/PostItStore';
import App from './components';

if (localStorage.getItem('user')) {
  PostItStore.setIsAuthenticated(true);
}


ReactDOM.render(
  <BrowserRouter basename="/#">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
