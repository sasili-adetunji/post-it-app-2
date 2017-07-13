import { EventEmitter } from 'events';
import assign from 'object-assign';



const _registeredUser = [];
let _usersInGroup = [];
let _usersNotInGroup = [];
let _users = [];
let _userGroups = [];
let _userMessages = [];
let _errors = '';
let _success = '';
const _loggedInUser = [];
let _selectedGroup = [];
let _openedGroup = [];
let _isAuthenticated = false;



const PostItStore = assign({}, EventEmitter.prototype, {


  registerNewUser(user) {

    _registeredUser.push(user);
    // _isAuthenticated = true;

      
        console.log('new user store auth:', _isAuthenticated);

  },
  getRegisteredUser() {
    return _registeredUser;
  },
  addUserToGroup(user) {
    _usersInGroup.push(user);
            console.log('add user store');

  },

  postMessage(message) {
    _groupMessages.push(message);
            console.log('message store');

  },

  createNewGroup(group) {
    _userGroups.push(group);
  },

  signinUser(user) {
    _loggedInUser.push(user);
    // _isAuthenticated = true;
    console.log('new user store auth:', _isAuthenticated);

  },

  signOutUser() {
    console.log('signing out...');
    _loggedInUser.pop();
    _isAuthenticated = false;
  },

  setIsAuthenticated(value) {
    _isAuthenticated = value;
  },

  receiveErrors(error) {
    console.log(error);
    _errors = error;
  },

  receiveSuccess(message) {
    _success = message;
  },

  getErrors() {
    return _errors;
  },
  getOpenedGroup() {
    return _selectedGroup;
  },

  getLoggedInUser() {
    // this.signinUser();
    return _loggedInUser;
  },

  getIsAuthenticated() {
    return _isAuthenticated;
  },

  getUserGroups() {
    return _userGroups;
  },
  getUsers() {
    console.log('userlist store');
    return _users;
  },

  getUserMessages() {
    return _userMessages;
  },
  getSuccess() {
    return _success;
  },

  setUserGroups(groups) {
    _userGroups = groups;
  },
  setUsers(users) {
    _users = users;
  },

  setUserMessages(messages) {
    _groupMessages = messages;
  },

  setOpenedGroup(group) {
    _selectedGroup.pop();
    _selectedGroup.push(group);
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
