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
  /**
   * signs in user with & dispatches actions
   * @param {any} user
   */
  login: function login(user) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.LOGIN_USER,
      user: user
    });
  },


  /**
   * signs in user with google & dispatches actions
   * @returns {void}
   */
  googleLogin: function googleLogin() {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.GOOGLE_LOGIN
    });
  },


  /**
   * registers in user & dispatches actions
   * @param {any} user
   * @function
   */
  registerUser: function registerUser(user) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.REGISTER_USER,
      user: user
    });
  },


  /**
   * recieves error message and dispatches actions
   * @param {any} errors
   */
  receiveErrors: function receiveErrors(errors) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RECEIVE_ERRORS,
      errors: errors
    });
  },


  /**
   * recieves success message and dispatches actions
   * @param {any} message
   */
  receiveSuccess: function receiveSuccess(message) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RECEIVE_SUCCESS,
      message: message

    });
  },


  /**
   * create group and dispatches actions
   * @param {any} group
   */
  createGroup: function createGroup(group) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.CREATE_GROUP,
      group: group

    });
  },


  /**
   * add users to group and dispatches an action
   * @param {any} user
   */
  addUserToGroup: function addUserToGroup(user) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.ADDUSER_GROUP,
      user: user

    });
  },

  /**
    * add message and dispatches an action
    * @param {any} message
    */
  addMessage: function addMessage(message) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.ADD_MESSAGE,
      message: message

    });
  },


  /**
   * resetpassword and dispatches an action
   * @param {any} email
   */
  resetPassword: function resetPassword(email) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RESET_PASSWORD,
      email: email

    });
  },


  /**
   * signout user and dispatches an action
   *
   */
  signOutUser: function signOutUser() {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.SIGNOUT_USER

    });
  },


  /**
   * recieve messages and dispatches action
   * @param {any} messages
   */
  receiveMessages: function receiveMessages(messages) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RECEIVE_MESSAGES,
      messages: messages

    });
  },


  /**
   * recieves user groups and dispatches action
   * @param {any} groups
   */
  receiveUserGroups: function receiveUserGroups(groups) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RECEIVE_USER_GROUPS,
      groups: groups

    });
  },


  /**
   * recieves users and dispatches an action
   *
   * @param {any} users
   */
  receiveUsers: function receiveUsers(users) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RECEIVE_USERS,
      users: users

    });
  },


  /**
   * recieve authenticated users and dispatches an action
   *
   * @param {any} user
   */
  receiveAuthenticatedUser: function receiveAuthenticatedUser(user) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.RECEIVE_AUTHENTICATED_USER,
      user: user

    });
  },


  /**
   * recieves opened group and dispatches an action
   *
   * @param {any} selectedGroup
   */
  groupOpened: function groupOpened(selectedGroup) {
    _PostItDispatcher2.default.dispatch({
      actionType: _PostItConstants2.default.GROUP_OPENED,
      selectedGroup: selectedGroup

    });
  }
};

exports.default = PostItActions;