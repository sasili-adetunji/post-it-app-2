import React from 'react';
import ReactDOM from 'react-dom';
import jwt from 'jsonwebtoken';
import { BrowserRouter } from 'react-router-dom';
require('../node_modules/toastr/build/toastr.min.css');
import PostItStore from './stores/PostItStore';
import setAuthorizationToken from './utils/setAuthorizationToken';
import App from './components';

if (localStorage.jwtToken) {
  PostItStore.setLoggedInUser(jwt.decode(localStorage.jwtToken))
  setAuthorizationToken(localStorage.jwtToken);
  PostItStore.setIsAuthenticated(true);
}


ReactDOM.render(
  <BrowserRouter basename="/#">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
