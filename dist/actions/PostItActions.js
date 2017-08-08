'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PostItDispatcher = require('../dispatcher/PostItDispatcher');

var _PostItDispatcher2 = _interopRequireDefault(_PostItDispatcher);

var _PostItConstants = require('../constants/PostItConstants');

var _PostItConstants2 = _interopRequireDefault(_PostItConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostItActions = {
  login: function login(user) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.LOGIN_USER,
      user: user

    });
  },
  googleLogin: function googleLogin() {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.GOOGLE_LOGIN
    });
  },
  registerUser: function registerUser(user) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.REGISTER_USER,
      user: user
    });
  },
  receiveErrors: function receiveErrors(errors) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RECEIVE_ERRORS,
      errors: errors
    });
  },
  receiveSuccess: function receiveSuccess(message) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RECEIVE_SUCCESS,
      message: message

    });
  },
  createGroup: function createGroup(group) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.CREATE_GROUP,
      group: group

    });
  },
  addUserToGroup: function addUserToGroup(user) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.ADDUSER_GROUP,
      user: user

    });
  },
  addMessage: function addMessage(message) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.ADD_MESSAGE,
      message: message

    });
  },
  resetPassword: function resetPassword(email) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RESET_PASSWORD,
      email: email

    });
  },
  signOutUser: function signOutUser() {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.SIGNOUT_USER

    });
  },
  receiveMessages: function receiveMessages(messages) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RECEIVE_MESSAGES,
      messages: messages

    });
  },
  receiveUserGroups: function receiveUserGroups(groups) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RECEIVE_USER_GROUPS,
      groups: groups

    });
  },
  receiveUsers: function receiveUsers(users) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RECEIVE_USERS,
      users: users

    });
  },
  receiveAuthenticatedUser: function receiveAuthenticatedUser(user) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RECEIVE_AUTHENTICATED_USER,
      user: user

    });
  },
  groupOpened: function groupOpened(selectedGroup) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.GROUP_OPENED,
      selectedGroup: selectedGroup

    });
  }
};

exports.default = PostItActions;