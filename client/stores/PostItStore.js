import { EventEmitter } from 'events';
import jwt from 'jsonwebtoken';
import assign from 'object-assign';
import PostItConstants from '../constants/PostItConstants';
import PostItDispatcher from '../dispatcher/PostItDispatcher';
import * as Api from '../Api';


let usersInGroup = [];
let users = [];
let groupsUser = [];
let readUsers = [];
let userMessages = [];
let errors = '';
let success = '';
let loginSuccess = '';
let loggedInUser = [];
const selectedGroup = [];
let isAuthenticated = false;
let searchedUsers = '';


const PostItStore = assign({}, EventEmitter.prototype, {

  /**
 * @description describes a function that set searched users
 *
 * @param { String } user
 *
 * @method setSearchedUsers
 *
 * @returns { void } void
 */

  setSearchedUsers(user) {
    searchedUsers = user;
  },

 /**
 * @description describes a function that return searched users
 *
 * @method getSearchedUsers
 *
 * @returns { String } searched users
 */
  getSearchedUsers() {
    return searchedUsers;
  },

 /**
 * @description describes a function that cler the store of searched users
 *
 * @method clearSearchedUsers
 *
 * @returns { void }
 */
  clearSearchedUsers() {
    searchedUsers = '';
  },

 /**
 * @description describes a function that add user to group
 *
 * @method addUserToGroup
 *
 * @param { String } user
 *
 * @returns { Array } the users in a group
 */
  addUserToGroup(user) {
    usersInGroup.push(user);
  },

/**
 * @description describes a function that signout user
 *
 * @method signOutUser
 *
 * @returns { void }
 */
  signOutUser() {
    loggedInUser.length = 0;
    isAuthenticated = false;
  },


/**
 * @description describes a function that set a user as authenticated
 *
 * @method setIsAuthenticated
 *
 * @param { Boolean }
 *
 * @returns { Boolean } returns true;
 */
  setIsAuthenticated(value) {
    isAuthenticated = value;
  },

/**
 * @description describes a function that recieves error
 *
 * @method receiveErrors
 *
 * @param { String } error
 *
 * @returns { String } the error
 */
  receiveErrors(error) {
    errors = error;
  },

/**
 * @description describes a function that recieve success message
 *
 * @method receiveSuccess
 *
 * @param { String } message
 *
 * @returns { String } returns success mesage;
 */
  receiveSuccess(message) {
    success = message;
  },

/**
 * @description describes a function that recieve login success message
 *
 * @method receiveLoginSuccess
 *
 * @param { String } message
 *
 * @returns { String } returns login success mesage;
 */
  receiveLoginSuccess(message) {
    loginSuccess = message;
  },

/**
 * @description describes a function that set error message
 *
 * @method setErrors
 *
 * @param { String } error
 *
 * @returns { String } returns error mesage;
 */
  setErrors(error) {
    errors = error;
  },

/**
 * @description describes a function thatreturn error
 *
 * @method getErrors
 *
 * @returns { String } returns success mesage;
 */
  getErrors() {
    return errors;
  },

/**
 * @description describes a function that the selected group
 *
 * @method getOpenedGroup
 *
 * @returns { Array } returns the selected group
 */
  getOpenedGroup() {
    return selectedGroup;
  },

/**
 * @description describes a function that recieves read users
 *
 * @method getReadUsers
 *
 * @returns { Array } returns the users that have read
 */
  getReadUsers() {
    return readUsers;
  },

/**
 * @description describes a function that recieves read users
 *
 * @method getLoggedInUser
 *
 * @returns { Array } returns the loggedin user
 */
  getLoggedInUser() {
    return loggedInUser;
  },

/**
 * @description describes a function that return if a user is authenticated
 *
 * @method getIsAuthenticated
 *
 * @returns { Boolean }
 */
  getIsAuthenticated() {
    return isAuthenticated;
  },

/**
 * @description describes a function that return users in a group
 *
 * @method getUsersInGroup
 *
 * @returns { Array } users in a particular group
 */
  getUsersInGroup() {
    return usersInGroup;
  },

/**
 * @description describes a function that return all users
 *
 * @method getUsers
 *
 * @returns { Array } users
 */
  getUsers() {
    return users;
  },


/**
 * @description describes a function that return success message
 *
 * @method getSuccess
 *
 * @returns { String }
 */
  getSuccess() {
    return success;
  },

/**
 * @description describes a function that return login success message
 *
 * @method getLoginSuccess
 *
 * @returns { String }
 */
  getLoginSuccess() {
    return loginSuccess;
  },

/**
 * @description describes a function that add groups
 *
 * @method addGroups
 *
 * @param { String } groups
 *
 * @returns { Array }
 */
  addGroups(groups) {
    groupsUser.push(groups);
  },

/**
 * @description describes a function that add message
 *
 * @method addMessage
 *
 * @param { String } message
 *
 * @returns { Array }
 */
  addMessage(message) {
    userMessages.push(message);
  },

/**
 * @description describes a function that set messages
 *
 * @method setMessages
 *
 * @param { String } messages
 *
 * @returns { Array }
 */
  setMessages(messages) {
    userMessages = messages;
  },

/**
 * @description describes a function that set user groups
 *
 * @method setUserGroups
 *
 * @param { String } groups
 *
 * @returns { Array }
 */
  setUserGroups(groups) {
    groupsUser = groups;
  },

/**
 * @description describes a function that return all groups of users
 *
 * @method getGroupsUser
 *
 * @returns { Array }
 */
  getGroupsUser() {
    return groupsUser;
  },

/**
 * @description describes a function that return all messages in a groups
 *
 * @method getGroupsMessages
 *
 * @returns { Array }
 */
  getGroupsMessages() {
    return userMessages;
  },

/**
 * @description describes a function that set users that have read a mesage
 *
 * @method setReadUsers
 *
 * @param { Object } user
 *
 * @returns { Array }
 */
  setReadUsers(user) {
    readUsers = user;
  },

/**
 * @description describes a function that set logged in user
 *
 * @method setLoggedInUser
 *
 * @param { Object } user
 *
 * @returns { Array }
 */
  setLoggedInUser(user) {
    loggedInUser = user;
  },

/**
 * @description describes a function that set logged in user
 *
 * @method setUsers
 *
 * @param { Object } user
 *
 * @returns { Array }
 */
  setUsers(user) {
    users = user;
  },

/**
 * @description describes a function that set logged in user
 *
 * @method setUsersInGroup
 *
 * @param { Object } user
 *
 * @returns { Array }
 */
  setUsersInGroup(user) {
    usersInGroup = user;
  },

/**
 * @description describes a function that set opened group
 *
 * @method setOpenedGroup
 *
 * @param { Object } group
 *
 * @returns { Array }
 */
  setOpenedGroup(group) {
    selectedGroup.pop();
    selectedGroup.push(group);
  },

/**
 * @description PostItStore emit event change
 *
 * @method emitChange
 *
 * @returns { void }
 */
  emitChange() {
    this.emit('change');
  },


/**
 * @description add PostItStore change listener
 *
 * @param { Object } callback
 *
 * @method addChangeListener
 *
 * @returns { void }
 */

  addChangeListener(callback) {
    this.on('change', callback);
  },


/**
 * @description Remove PostItStore change listener
 *
 * @param { Object } callback
 *
 * @method removeChangeListener
 *
 * @returns { void }
 */

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },
});

PostItDispatcher.register((payload) => {
  const action = payload.action;
  switch (action.actionType) {
    case PostItConstants.REGISTER_USER:
      Api.registerNewUser(action.user);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.LOGIN_USER:
      Api.signinUser(action.user);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.CREATE_GROUP:
      Api.createNewGroup(action.group);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.GOOGLE_LOGIN:
      Api.googleLogin(action.result);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.ADDUSER_GROUP:
      Api.addUserToGroup(action.user);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.ADD_MESSAGE:
      PostItStore.addMessage(action.message);
      Api.postMessage(action.message);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.SIGNOUT_USER:
      Api.signoutUser();
      PostItStore.signOutUser();
      PostItStore.emitChange('change');
      break;

    case PostItConstants.GET_USER_MESSAGES:
      Api.getMessages(action.groups);
      PostItStore.emitChange('change');
      break;
    case PostItConstants.RECEIVE_READ_USERS:
      Api.getUserReadUsers(action.message);
      PostItStore.setReadUsers(action.user);
      PostItStore.emitChange('change');
      break;
    case PostItConstants.RECIEVE_USERS_IN_GROUPS:
      Api.getUsersInGroup(action.group);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.RECEIVE_USER_GROUPS:
      Api.getUserGroups();
      PostItStore.setUserGroups(action.groups);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.RECEIVE_USERS:
      PostItStore.setUsers(action.users);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.RESET_PASSWORD:
      Api.resetPassword(action.email);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.RECEIVE_AUTHENTICATED_USER:
      PostItStore.setIsAuthenticated(true);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.GROUP_OPENED:
      PostItStore.setOpenedGroup(action.selectedGroup);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.RECEIVE_SUCCESS:
      PostItStore.receiveSuccess(action.message);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.RECEIVE_LOGIN_SUCCESS:
      PostItStore.setIsAuthenticated(true);
      PostItStore.setLoggedInUser(jwt.decode(localStorage.jwtToken)); //eslint-disable-line
      PostItStore.emitChange('change');
      break;

    case PostItConstants.RECEIVE_ERRORS:
      PostItStore.receiveErrors(action.errors);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.RECIEVE_ADD_MEMBERS_TO_GROUP:
      PostItStore.addUserToGroup(action.message);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.RECIEVE_CREATE_GROUP:
      PostItStore.addGroups(action.group);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.SEARCH_USERS:
      Api.searchUsers(action.users);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.CLEAR_SEARCH:
      PostItStore.clearSearchedUsers();
      PostItStore.emitChange('change');
      break;

    default:
  }
  return true;
});

export default PostItStore;
