'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _db = require('../../server/config/db');

var _PostItActions = require('../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

var _PostItStore = require('../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {

  /**
   * api call to register new user from the signup route
   *
   * @param {any} user
   */
  registerNewUser: function registerNewUser(user) {
    _axios2.default.post('/user/signup', {
      email: user.email,
      password: user.password,
      username: user.username,
      phoneNumber: user.phoneNumber
    }).then(function (response) {
      var authuser = {
        email: user.email,
        isAuthenticated: true
      };
      if (response.data.message === 'The email address is badly formatted.' || response.data.message === 'The email address is already in use by another account.') {
        _PostItActions2.default.receiveErrors(response.data.message);
      } else {
        _PostItActions2.default.receiveSuccess(response.data.message);
        _PostItActions2.default.receiveAuthenticatedUser(authuser);
      }
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },


  /**
   * api call to signin user from the signin route
   *
   * @param {any} user
   */
  signinUser: function signinUser(user) {
    _axios2.default.post('/user/signin', {
      email: user.email,
      password: user.password
    }).then(function (response) {
      var authuser = {
        email: user.email,
        isAuthenticated: true
      };
      if (response.data.message === 'Error: The email or password of the user is invalid') {
        _PostItActions2.default.receiveErrors(response.data.message);
      } else {
        _PostItActions2.default.receiveSuccess(response.data.message);
        _PostItActions2.default.receiveAuthenticatedUser(authuser);
      }
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },


  /**
   * api call to signout user from the signout route
   *
   */
  signoutUser: function signoutUser() {
    _axios2.default.post('/user/signout').then(function (response) {
      _PostItActions2.default.receiveSuccess(response.message);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },


  /**
   * api call to login us with google
   * 
   */
  googleLogin: function googleLogin() {
    var email = void 0,
        uid = void 0,
        displayName = void 0;
    var provider = new _firebase2.default.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    (0, _db.firebaseAuth)().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;
      email = result.user.email;
      uid = result.user.uid;
      displayName = result.user.displayName;
    }).then(function () {
      _firebase2.default.database().ref('users/').child(uid).set({
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


  /**
   * api call to create new group from the route
   *
   * @param {any} group
   */
  createNewGroup: function createNewGroup(group) {
    _axios2.default.post('/group', {
      groupname: group.groupname
    }).then(function (response) {
      _PostItActions2.default.receiveSuccess(response.message);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },


  /**
   * api call to add user to groups
   *
   * @param {any} user
   */
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


  /**
   * api call to post message through the message route
   *
   * @param {any} message
   */
  postMessage: function postMessage(message) {
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


  /**
   * api call to get user groups
   *
   */
  getUserGroups: function getUserGroups() {
    _axios2.default.get('user/groups').then(function (response) {
      console.log(response);
      _PostItActions2.default.receiveSuccess(response.message);
      _PostItActions2.default.receiveUserGroups(response.data.groups);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },


  /**
   * api call to get list of all the users in a group
   *
   */
  getUsersInGroup: function getUsersInGroup(group) {
    _axios2.default.get('/group/' + group.groupId + '/users').then(function (response) {
      _PostItActions2.default.receiveSuccess(response.message);
      _PostItStore2.default.setUsersInGroup(response.data.users);
      //  PostItActions.receiveUsersInGroup(response.data.users);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },

  /**
   * api call to get list of all the users in the App
   *
   */
  getUsers: function getUsers() {
    _axios2.default.get('user/users').then(function (response) {
      console.log(response);
      _PostItActions2.default.receiveSuccess(response.message);
      _PostItActions2.default.receiveUsers(response.data.users);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },


  /**
   * api call to get messages in a particular groups
   *
   * @param {any} group
   */
  getMessages: function getMessages(group) {
    _axios2.default.get('/group/' + group.groupId + '/messages').then(function (response) {
      _PostItActions2.default.receiveSuccess(response.message);
      _PostItActions2.default.receiveMessages(response.data.messages);
    }).catch(function (error) {
      _PostItActions2.default.receiveErrors(error.message);
    });
  },


  /**
   * api call to reset password
   *
   * @param {any} email
   */
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