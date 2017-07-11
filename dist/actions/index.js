'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _firebase = require('firebase');

var firebase = _interopRequireWildcard(_firebase);

var _db = require('../../server/config/db');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actions = function () {
  function Actions() {
    _classCallCheck(this, Actions);

    this.generateActions('groupsReceived', 'groupsFailed', 'memberAdded', 'messagesReceived', 'groupOpened', 'messagesLoading', 'sendMessage', 'messageSendSuccess', 'messageSendError', 'messageReceived', 'groupAdd', 'groupAddedSuccess', 'groupAddedFailed', 'memberAddedSuccess', 'memberAddedFailed', 'userRecieved', 'userFailed');
  }

  _createClass(Actions, [{
    key: 'signup',
    value: function signup(details) {
      return function (dispatch) {
        return _axios2.default.post('/user/signup', details).then(function (error, user) {
          if (error) {
            return;
          }

          dispatch(user);
        });
        router.transitionTo('/dashboard');
      };
    }
  }, {
    key: 'signin',
    value: function signin(details) {
      return function (dispatch) {
        return _axios2.default.post('/user/signin', details).then(function (error, user) {
          if (error) {
            return;
          }

          dispatch(user);
        });
        router.transitionTo('/dashboard');
      };
    }
  }, {
    key: 'googleLogin',
    value: function googleLogin(router) {
      return function (dispatch) {
        return (0, _db.firebaseAuth)().signInWithPopup(new _db.firebaseAuth().GoogleAuthProvider()).then(function (error, user) {
          if (error) {
            return;
          }

          dispatch(user);
        });
        router.transitionTo('/dashboard');
      };
    }
  }, {
    key: 'reset',
    value: function reset() {}
  }]);

  return Actions;
}();

exports.default = _alt2.default.createActions(Actions);