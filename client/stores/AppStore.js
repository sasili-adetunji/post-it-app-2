import { EventEmitter } from 'events';
import jwt from 'jsonwebtoken';
import assign from 'object-assign';
import AppConstants from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import * as Api from '../api/AppApi';


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


const AppStore = assign({}, EventEmitter.prototype, {


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
 * @description AppStore emit event change
 *
 * @method emitChange
 *
 * @returns { void }
 */
  emitChange() {
    this.emit('change');
  },


/**
 * @description add AppStore change listener
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
 * @description Remove AppStore change listener
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

AppDispatcher.register((payload) => {
  const action = payload.action;
  switch (action.actionType) {
    case AppConstants.REGISTER_USER:
      Api.registerNewUser(action.user);
      AppStore.emitChange('change');
      break;

    case AppConstants.LOGIN_USER:
      Api.signinUser(action.user);
      AppStore.emitChange('change');
      break;

    case AppConstants.CREATE_GROUP:
      Api.createNewGroup(action.group);
      AppStore.emitChange('change');
      break;

    case AppConstants.GOOGLE_LOGIN:
      Api.googleLogin(action.idToken);
      AppStore.emitChange('change');
      break;

    case AppConstants.ADDUSER_GROUP:
      Api.addUserToGroup(action.user);
      AppStore.emitChange('change');
      break;

    case AppConstants.ADD_MESSAGE:
      AppStore.addMessage(action.message);
      Api.postMessage(action.message);
      AppStore.emitChange('change');
      break;

    case AppConstants.SIGNOUT_USER:
      Api.signoutUser();
      location.reload();
      AppStore.signOutUser();
      AppStore.emitChange('change');
      break;

    case AppConstants.GET_USER_MESSAGES:
      Api.getMessages(action.groups);
      AppStore.emitChange('change');
      break;
    case AppConstants.RECEIVE_READ_USERS:
      Api.getUserReadUsers(action.message);
      AppStore.emitChange('change');
      break;
    case AppConstants.RECIEVE_USERS_IN_GROUPS:
      Api.getUsersInGroup(action.group);
      AppStore.emitChange('change');
      break;

    case AppConstants.RECEIVE_USER_GROUPS:
      Api.getUserGroups();
      AppStore.setUserGroups(action.groups);
      AppStore.emitChange('change');
      break;

    case AppConstants.RECEIVE_USERS:
      AppStore.setUsers(action.users);
      AppStore.emitChange('change');
      break;

    case AppConstants.RESET_PASSWORD:
      Api.resetPassword(action.email);
      AppStore.emitChange('change');
      break;

    case AppConstants.GROUP_OPENED:
      AppStore.setOpenedGroup(action.selectedGroup);
      AppStore.emitChange('change');
      break;

    case AppConstants.RECEIVE_SUCCESS:
      AppStore.receiveSuccess(action.message);
      AppStore.emitChange('change');
      break;

    case AppConstants.RECEIVE_LOGIN_SUCCESS:
      AppStore.setIsAuthenticated(true);
      AppStore.setLoggedInUser(jwt.decode(localStorage.jwtToken));
      AppStore.emitChange('change');
      break;

    case AppConstants.RECEIVE_ERRORS:
      AppStore.receiveErrors(action.errors);
      AppStore.emitChange('change');
      break;

    case AppConstants.RECIEVE_ADD_MEMBERS_TO_GROUP:
      AppStore.addUserToGroup(action.user);
      AppStore.emitChange('change');
      break;

    case AppConstants.RECIEVE_CREATE_GROUP:
      AppStore.addGroups(action.group);
      AppStore.emitChange('change');
      break;

    default:
  }
  return true;
});

export default AppStore;
