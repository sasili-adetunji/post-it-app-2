'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _db = require('../../server/config/db');

var _PostItActions = require('../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  registerNewUser: function registerNewUser(user) {
    console.log(user);
    _axios2.default.post('/user/signup', {
      email: user.email,
      password: user.password,
      username: user.username,
      phoneNumber: user.phoneNumber
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
  googleLogin: function googleLogin() {
    var token, email, uid, displayName;
    var provider = new _firebase2.default.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    (0, _db.firebaseAuth)().signInWithPopup(provider).then(function (result) {
      token = result.credential.accessToken;
      email = result.user.email;
      uid = result.user.uid;
      displayName = result.user.displayName;
    }).then(function (snap) {
      var userRef = _firebase2.default.database().ref('users/').child(uid).set({
        username: displayName,
        email: email
      });
    }).then(function () {
      var authuser = {
        email: email,
        isAuthenticated: true
      };
      _PostItActions2.default.receiveSuccess({ message: 'Success: you have successfuly signed in.' });
      _PostItActions2.default.receiveAuthenticatedUser(authuser);
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
      message: message.message,
      priorityLevel: message.priorityLevel
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
  getMessages: function getMessages(group) {
    _axios2.default.get('/group/' + group.groupId + '/messages').then(function (response) {
      _PostItActions2.default.receiveSuccess(response.message);
      _PostItActions2.default.receiveMessages(response.data.messages);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },
  resetPassword: function resetPassword(email) {
    _axios2.default.post('/user/reset', {
      email: email.email
    }).then(function (response) {
      _PostItActions2.default.receiveSuccess(response.message);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  }
};