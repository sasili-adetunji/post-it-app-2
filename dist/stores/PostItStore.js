'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _registeredUser = [];
var _usersInGroup = [];
var _usersNotInGroup = [];
var _userGroups = [];
var _userMessages = [];
var _errors = '';
var _success = '';
var _loggedInUser = [];
var _selectedGroup = [];
var _openedGroup = [];
var _isAuthenticated = false;

var PostItStore = (0, _objectAssign2.default)({}, _events.EventEmitter.prototype, {
  registerNewUser: function registerNewUser(user) {

    _registeredUser.push(user);
    // _isAuthenticated = true;


    console.log('new user store auth:', _isAuthenticated);
  },
  getRegisteredUser: function getRegisteredUser() {
    return _registeredUser;
  },
  addUserToGroup: function addUserToGroup(user) {
    _usersInGroup.push(user);
    console.log('add user store');
  },
  postMessage: function postMessage(message) {
    _groupMessages.push(message);
    console.log('message store');
  },
  createNewGroup: function createNewGroup(group) {
    _userGroups.push(group);
  },
  signinUser: function signinUser(user) {
    _loggedInUser.push(user);
    // _isAuthenticated = true;
    console.log('new user store auth:', _isAuthenticated);
  },
  signOutUser: function signOutUser() {
    console.log('signing out...');
    _loggedInUser.pop();
    _isAuthenticated = false;
  },
  setIsAuthenticated: function setIsAuthenticated(value) {
    _isAuthenticated = value;
  },
  receiveErrors: function receiveErrors(error) {
    console.log(error);
    _errors = error;
  },
  receiveSuccess: function receiveSuccess(message) {
    _success = message;
  },
  getErrors: function getErrors() {
    return _errors;
  },
  getOpenedGroup: function getOpenedGroup() {
    return _selectedGroup;
  },
  getLoggedInUser: function getLoggedInUser() {
    // this.signinUser();
    return _loggedInUser;
  },
  getIsAuthenticated: function getIsAuthenticated() {
    return _isAuthenticated;
  },
  getUserGroups: function getUserGroups() {
    return _userGroups;
  },
  getUserpMessages: function getUserpMessages() {
    return _userMessages;
  },
  getSuccess: function getSuccess() {
    return _success;
  },
  setUserGroups: function setUserGroups(groups) {
    _userGroups = groups;
  },
  setUserMessages: function setUserMessages(messages) {
    _groupMessages = messages;
  },
  setOpenedGroup: function setOpenedGroup(group) {
    _selectedGroup.pop();
    _selectedGroup.push(group);
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