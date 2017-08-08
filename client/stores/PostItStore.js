import { EventEmitter } from 'events';
import assign from 'object-assign';


const registeredUser = [];
const usersInGroup = [];
const usersNotInGroup = [];
let users = [];
let userGroups = [];
let userMessages = [];
let errors = '';
let success = '';
const loggedInUser = [];
const selectedGroup = [];
const openedGroup = [];
let isAuthenticated = false;


const PostItStore = assign({}, EventEmitter.prototype, {


  registerNewUser(user) {
    registeredUser.push(user);


    console.log('new user store auth:', isAuthenticated);
  },
  getRegisteredUser() {
    return registeredUser;
  },
  addUserToGroup(user) {
    usersInGroup.push(user);
    console.log('add user store');
  },

  postMessage(message) {
    userMessages.push(message);
    console.log('message store');
  },

  createNewGroup(group) {
    userGroups.push(group);
  },

  signinUser(user) {
    loggedInUser.push(user);
    // _isAuthenticated = true;
    console.log('new user store auth:', isAuthenticated);
  },

  signOutUser() {
    console.log('signing out...');
    loggedInUser.pop();
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

  getLoggedInUser() {
    // this.signinUser();
    return loggedInUser;
  },

  getIsAuthenticated() {
    return isAuthenticated;
  },

  getUserGroups() {
    return userGroups;
  },
  getUsers() {
    console.log('userlist store');
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
  setUsers(user) {
    users = user;
  },

  setMessages(messages) {
    userMessages = messages;
  },

  setOpenedGroup(group) {
    console.log('setOpenedGroup store');

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
