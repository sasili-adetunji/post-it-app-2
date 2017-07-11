'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _db = require('../../server/config/db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fb = _firebase2.default.database();
var firebaseRef = null;

var MessageSource = {

  getMessages: {
    remote: function remote(state) {

      if (firebaseRef) {
        firebaseRef.off();
      }
      firebaseRef = fb.ref('users/' + user.uid + '/groups/' + groupId).child('messages');

      return new Promise(function (resolve, reject) {
        return _axios2.default.get('/user/message', details);
        resolve(messages);

        setTimeout(function () {
          firebaseRef.on('child_added', function (msg) {
            var msgVal = msg.val();
            msgVal.key = msg.key();
            _actions2.default.messageReceived(msgVal);
          });
        }, 10);
      });
    },

    success: _actions2.default.messagesReceived,
    error: _actions2.default.messagesFailed,
    loading: _actions2.default.messagesLoading
  },
  sendMessage: {
    remote: function remote(state) {
      return new Promise(function (resolve, reject) {
        return _axios2.default.post('/message', details);
        resolve();
      });
    },

    success: _actions2.default.messageSendSuccess,
    error: _actions2.default.messageSendError
  }
};

exports.default = MessageSource;