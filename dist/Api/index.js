'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostItActions = require('../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  registerNewUser: function registerNewUser(user) {
    console.log(user);
    _axios2.default.post('/user/signup', {
      email: user.email,
      password: user.password,
      username: user.username
    }).then(function (response) {
      console.log(response.data.message);
      _PostItActions2.default.receiveSuccess(response.data.message);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },
  signinUser: function signinUser(user) {
    _axios2.default.post('/user/signin', {
      email: user.email,
      password: user.password
    }).then(function (response) {
      var authuser = {
        email: user.email,
        isAuthenticated: true
      };
      _PostItActions2.default.receiveSuccess(response.message);
      _PostItActions2.default.receiveAuthenticatedUser(authuser);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },
  signoutUser: function signoutUser() {
    _axios2.default.post('/user/signout').then(function (response) {
      _PostItActions2.default.receiveSuccess(response.message);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },
  googleLogin: function googleLogin(token) {
    _axios2.default.post('/user/google').then(function (response) {
      console.log(response.data.message);
      _PostItActions2.default.receiveSuccess(response.user);
      _PostItActions2.default.receiveAuthenticatedUser(response.user);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },
  createNewGroup: function createNewGroup(group) {
    _axios2.default.post('/group', {
      groupname: group.groupname
    }).then(function (response) {
      _PostItActions2.default.receiveSuccess(response.message);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },
  addUserToGroup: function addUserToGroup(user) {
    _axios2.default.post('/group/' + user.groupId + '/user', {
      email: user.email,
      userId: user.userId,
      username: user.username,
      groupname: user.groupName
    }).then(function (response) {
      _PostItActions2.default.receiveSuccess(response.message);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },
  postMessage: function postMessage(message) {
    // console.log('api', message);
    _axios2.default.post('/message', {
      groupId: message.groupId,
      message: message.message
    }).then(function (response) {
      _PostItActions2.default.receiveSuccess(response.message);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },
  getUserGroups: function getUserGroups() {
    _axios2.default.get('user/groups').then(function (response) {
      console.log(response);
      _PostItActions2.default.receiveSuccess(response.message);
      _PostItActions2.default.receiveUserGroups(response.data.groups);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },
  getUsers: function getUsers() {
    _axios2.default.get('user/users').then(function (response) {
      console.log(response);
      _PostItActions2.default.receiveSuccess(response.message);
      _PostItActions2.default.receiveUsers(response.data.users);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },
  getMessages: function getMessages() {
    _axios2.default.get('/user/message').then(function (response) {
      _PostItActions2.default.receiveSuccess(response.message);
      _PostItActions2.default.receiveMessages(response.data.messages);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },
  resetPassword: function resetPassword(email) {
    _axios2.default.get('/user/reset').then(function (response) {
      _PostItActions2.default.receiveSuccess(response.message);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  }
};