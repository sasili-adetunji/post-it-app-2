'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registeredUser = [];
var usersInGroup = [];
var usersNotInGroup = [];
var users = [];
var userGroups = [];
var userMessages = [];
var errors = '';
var success = '';
var loggedInUser = [];
var selectedGroup = [];
var openedGroup = [];
var isAuthenticated = false;

var PostItStore = (0, _objectAssign2.default)({}, _events.EventEmitter.prototype, {
  registerNewUser: function registerNewUser(user) {
    registeredUser.push(user);
  },
  getRegisteredUser: function getRegisteredUser() {
    return registeredUser;
  },
  addUserToGroup: function addUserToGroup(user) {
    usersInGroup.push(user);
  },
  postMessage: function postMessage(message) {
    userMessages.push(message);
  },
  createNewGroup: function createNewGroup(group) {
    userGroups.push(group);
  },
  signinUser: function signinUser(user) {
    loggedInUser.push(user);
  },
  signOutUser: function signOutUser() {
    loggedInUser.pop();
    isAuthenticated = false;
  },
  setIsAuthenticated: function setIsAuthenticated(value) {
    isAuthenticated = value;
  },
  receiveErrors: function receiveErrors(error) {
    console.log(error);
    errors = error;
  },
  receiveSuccess: function receiveSuccess(message) {
    success = message;
  },
  getErrors: function getErrors() {
    return errors;
  },
  getOpenedGroup: function getOpenedGroup() {
    return selectedGroup;
  },
  getLoggedInUser: function getLoggedInUser() {
    return loggedInUser;
  },
  getIsAuthenticated: function getIsAuthenticated() {
    return isAuthenticated;
  },
  getUserGroups: function getUserGroups() {
    return userGroups;
  },
  getUsersInGroup: function getUsersInGroup() {
    return usersInGroup;
  },
  getUsers: function getUsers() {
    return users;
  },
  getMessages: function getMessages() {
    return userMessages;
  },
  getSuccess: function getSuccess() {
    return success;
  },
  setUserGroups: function setUserGroups(groups) {
    userGroups = groups;
  },
  setUsers: function setUsers(user) {
    users = user;
  },
  setUsersInGroup: function setUsersInGroup(user) {
    usersInGroup = user;
  },
  setMessages: function setMessages(messages) {
    userMessages = messages;
  },
  setOpenedGroup: function setOpenedGroup(group) {
    selectedGroup.pop();
    selectedGroup.push(group);
  },
  emitChange: function emitChange() {
    this.emit('change');
  },
  addChangeListener: function addChangeListener(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
});

exports.default = PostItStore;