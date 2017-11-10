import { EventEmitter } from 'events';
import assign from 'object-assign';
import PostItConstants from '../constants/PostItConstants';
import PostItDispatcher from '../dispatcher/PostItDispatcher';
import * as Api from '../Api';


let usersInGroup = [];
let users = [];
// const userGroups = [];
let groupsUser = [];
let readUsers = [];
let userMessages = [];
let errors = '';
let success = '';
let loginSuccess = '';
let loggedInUser = [];
const selectedGroup = [];
let isAuthenticated = false;


const PostItStore = assign({}, EventEmitter.prototype, {

  addUserToGroup(user) {
    usersInGroup.push(user);
  },

  // createNewGroup(group) {
  //   userGroups.push(group);
  // },

  signOutUser() {
    loggedInUser.length = 0;
    isAuthenticated = false;
  },

  setIsAuthenticated(value) {
    isAuthenticated = value;
  },

  receiveErrors(error) {
    errors = error;
  },

  receiveSuccess(message) {
    success = message;
  },
  receiveLoginSuccess(message) {
    loginSuccess = message;
  },
  setErrors(error) {
    errors = error;
  },
  getErrors() {
    return errors;
  },
  getOpenedGroup() {
    return selectedGroup;
  },

  getReadUsers() {
    return readUsers;
  },

  getLoggedInUser() {
    return loggedInUser;
  },

  getIsAuthenticated() {
    return isAuthenticated;
  },

  getUsersInGroup() {
    return usersInGroup;
  },
  getUsers() {
    return users;
  },

  // getGroups() {
  //   return userGroups;
  // },
  getSuccess() {
    return success;
  },
  getLoginSuccess() {
    return loginSuccess;
  },
  addGroups(groups) {
    groupsUser.push(groups);
  },
  addMessage(message) {
    userMessages.push(message);
  },
  setMessages(messages) {
    userMessages = messages;
  },
  setUserGroups(groups) {
    groupsUser = groups;
  },
  getGroupsUser() {
    return groupsUser;
  },

  getGroupsMessages() {
    return userMessages;
  },

  setReadUsers(user) {
    readUsers = user;
  },

  setLoggedInUser(user) {
    loggedInUser = user;
  },

  setUsers(user) {
    users = user;
  },
  setUsersInGroup(user) {
    usersInGroup = user;
  },

  setOpenedGroup(group) {
    selectedGroup.pop();
    selectedGroup.push(group);
  },

  emitChange() {
    this.emit('change');
  },

  addChangeListener(callback) {
    this.on('change', callback);
  },

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
      PostItStore.addUserToGroup(action.user);
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
      // PostItStore.setUsersInGroup(action.group);
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
      PostItStore.receiveSuccess(action.message.message);
      PostItStore.setLoggedInUser(action.message);
      PostItStore.emitChange('change');
      break;

    case PostItConstants.RECEIVE_ERRORS:
      PostItStore.receiveErrors(action.errors);
      PostItStore.emitChange('change');
      break;

    default:
  }
  return true;
});

export default PostItStore;
