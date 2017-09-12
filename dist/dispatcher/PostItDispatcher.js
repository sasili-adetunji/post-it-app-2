'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flux = require('flux');

var _PostItStore = require('../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _PostItConstants = require('../constants/PostItConstants');

var _PostItConstants2 = _interopRequireDefault(_PostItConstants);

var _Api = require('../Api');

var _Api2 = _interopRequireDefault(_Api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostItDispatcher = new _flux.Dispatcher();

PostItDispatcher.register(function (action) {
  switch (action.actionType) {
    case _PostItConstants2.default.REGISTER_USER:
      _Api2.default.registerNewUser(action.user);
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.LOGIN_USER:
      _Api2.default.signinUser(action.user);
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.CREATE_GROUP:
      _Api2.default.createNewGroup(action.group);
      _PostItStore2.default.createNewGroup(action.group);
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.GOOGLE_LOGIN:
      _Api2.default.googleLogin();
      _PostItStore2.default.signinUser(action.token);
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.ADDUSER_GROUP:
      _Api2.default.addUserToGroup(action.user);
      _PostItStore2.default.addUserToGroup(action.user);
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.ADD_MESSAGE:
      _Api2.default.postMessage(action.message);
      _PostItStore2.default.postMessage(action.message);
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.SIGNOUT_USER:
      _Api2.default.signoutUser();
      _PostItStore2.default.signOutUser();
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.RECEIVE_MESSAGES:
      _PostItStore2.default.setMessages(action.messages);
      _PostItStore2.default.emitChange();
      break;
    case _PostItConstants2.default.RECEIVE_READ_USERS:
      _Api2.default.getUserReadUsers(action.user);
      _PostItStore2.default.setReadUsers(action.user);
      _PostItStore2.default.emitChange();
      break;
    case _PostItConstants2.default.RECEIVE_USERS_IN_GROUPS:
      _PostItStore2.default.setUsersInGroup(action.groups);
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.RECEIVE_USER_GROUPS:
      _PostItStore2.default.setUserGroups(action.groups);
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.RECEIVE_USERS:
      _PostItStore2.default.setUsers(action.users);
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.RESET_PASSWORD:
      _Api2.default.resetPassword(action.email);
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.RECEIVE_AUTHENTICATED_USER:
      _PostItStore2.default.setIsAuthenticated(true);
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.GROUP_OPENED:
      _PostItStore2.default.setOpenedGroup(action.selectedGroup);
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.RECEIVE_SUCCESS:
      _PostItStore2.default.receiveSuccess(action.message);
      _PostItStore2.default.emitChange();
      break;

    case _PostItConstants2.default.RECEIVE_ERRORS:
      _PostItStore2.default.receiveErrors(action.errors);
      _PostItStore2.default.emitChange();
      break;

    default:
  }
  return true;
});

exports.default = PostItDispatcher;