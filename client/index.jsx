import React from 'react';
import ReactDOM from 'react-dom';
import jwt from 'jsonwebtoken';
import { BrowserRouter } from 'react-router-dom';
import AppStore from './stores/AppStore';
import AppActions from './actions/AppActions';
import setAuthorizationToken from './utils/setAuthorizationToken';
import App from './components/App';
require('../node_modules/toastr/build/toastr.min.css');


if (localStorage.jwtToken) {
  AppStore.setLoggedInUser(jwt.decode(localStorage.jwtToken));
  setAuthorizationToken(localStorage.jwtToken);
  AppStore.setIsAuthenticated(true);
}

if (localStorage.selectedGroupId) {
  const groupDetails = localStorage.selectedGroupId;
  AppActions.groupOpened(JSON.parse(groupDetails));
  AppActions.getUserMessages(JSON.parse(groupDetails));
  AppActions.recieveUsersInGroups(JSON.parse(groupDetails));
}

ReactDOM.render(
  <BrowserRouter basename="/#">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
