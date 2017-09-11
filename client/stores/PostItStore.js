import { EventEmitter } from 'events';
import assign from 'object-assign';


const registeredUser = [];
let usersInGroup = [];
const usersNotInGroup = [];
let users = [];
let userGroups = [];
let readUsers = [];
let userMessages = [];
let errors = '';
let success = '';
let loggedInUser = [];
const selectedGroup = [];
const openedGroup = [];
let isAuthenticated = false;


const PostItStore = assign({}, EventEmitter.prototype, {

  registerNewUser(user) {
    registeredUser.push(user);
  },

  getRegisteredUser() {
    return registeredUser;
  },

  addUserToGroup(user) {
    usersInGroup.push(user);
  },

  postMessage(message) {
    userMessages.push(message);
  },

  createNewGroup(group) {
    userGroups.push(group);
  },

  signinUser(user) {
    loggedInUser.push(user);
  },

  signOutUser() {
    loggedInUser.length = 0;
    isAuthenticated = false;
  },

  setIsAuthenticated(value) {
    isAuthenticated = value;
  },

  receiveErrors(error) {
    console.log(error);
    errors = error;
  },

  receiveSuccess(message) {
    success = message;
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

  getUserGroups() {
    return userGroups;
  },
  getUsersInGroup() {
    return usersInGroup;
  },

  getUsers() {
    return users;
  },

  getMessages() {
    return userMessages;
  },
  getSuccess() {
    return success;
  },

  setUserGroups(groups) {
    userGroups = groups;
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

  setMessages(messages) {
    userMessages = messages;
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
  }
});

export default PostItStore;
