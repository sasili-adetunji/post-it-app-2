'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _flux = require('flux');

var _PostItStore = require('../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _PostItConstants = require('../constants/PostItConstants');

var _PostItConstants2 = _interopRequireDefault(_PostItConstants);

var _Api = require('../Api');

var _Api2 = _interopRequireDefault(_Api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostItDispatcher = new _flux.Dispatcher();

PostItDispatcher.register(function (action) {

    switch (action.actionType) {
        case _PostItConstants2.default.REGISTER_USER:

            console.log('Registering user...');
            _Api2.default.registerNewUser(action.user);
            _PostItStore2.default.registerNewUser(action.user);
            console.log('storing user...');
            _PostItStore2.default.emitChange();
            break;

        case _PostItConstants2.default.LOGIN_USER:

            console.log('logging in user...');

            _Api2.default.signinUser(action.user);
            _PostItStore2.default.signinUser(action.user);

            _PostItStore2.default.emitChange();
            break;

        case _PostItConstants2.default.CREATE_GROUP:
            console.log('create user group');

            _Api2.default.createNewGroup(action.group);

            _PostItStore2.default.createNewGroup(action.group);

            _PostItStore2.default.emitChange();
            break;

        case _PostItConstants2.default.GOOGLE_LOGIN:
            console.log('Google login');

            _Api2.default.googleLogin();

            _PostItStore2.default.signinUser(action.token);

            _PostItStore2.default.emitChange();
            break;

        case _PostItConstants2.default.ADDUSER_GROUP:

            console.log('add user group');
            _Api2.default.addUserToGroup(action.user);

            _PostItStore2.default.addUserToGroup(action.user);

            _PostItStore2.default.emitChange();
            break;

        case _PostItConstants2.default.ADD_MESSAGE:
            console.log('add message');

            _Api2.default.postMessage(action.message);

            _PostItStore2.default.postMessage(action.message);
            console.log('storing message...');

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

        case _PostItConstants2.default.RECEIVE_USER_GROUPS:

            _PostItStore2.default.setUserGroups(action.groups);

            _PostItStore2.default.emitChange();
            break;
        case _PostItConstants2.default.RECEIVE_USERS:

            console.log('storing users...');

            _PostItStore2.default.setUsers(action.users);

            _PostItStore2.default.emitChange();
            break;
        case _PostItConstants2.default.RESET_PASSWORD:

            _Api2.default.resetPassword(action.email);

            _PostItStore2.default.emitChange();
            break;

        case _PostItConstants2.default.RECEIVE_AUTHENTICATED_USER:

            _PostItStore2.default.signinUser(action.user);
            _PostItStore2.default.registerNewUser(action.user);
            _PostItStore2.default.setIsAuthenticated(true);
            _PostItStore2.default.emitChange();
            break;

        case _PostItConstants2.default.SELECT_GROUP:

            _PostItStore2.default.setOpenedGroup(action.selectedGroup);

            _PostItStore2.default.emitChange();
            break;
        case _PostItConstants2.default.GROUP_OPENED:

            _PostItStore2.default.getOpenedGroup(action.selectedGroup);

            _PostItStore2.default.emitChange();
            break;

        case _PostItConstants2.default.RECEIVE_SUCCESS:
            _PostItStore2.default.receiveSuccess(action.message);

            _PostItStore2.default.emitChange();
            break;

        case _PostItConstants2.default.RECEIVE_ERRORS:

            _PostItStore2.default.receiveErrors(action.errors);

            _PostItStore2.default.emitChange();

        default:

    }

    return true;
});

exports.default = PostItDispatcher;