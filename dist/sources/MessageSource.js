'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _db = require('../../server/config/db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageSource = {
  getMessages: {
    remote: function remote(state) {

      var refer = _db.ref.child('users').child(state.selectedChannel.key);

      return new Promise(function (resolve, reject) {
        _db.ref.once("value", function (dataSnapshot) {
          var messages = dataSnapshot.val();
          resolve(messages);

          setTimeout(function () {
            refer.on("child_added", function (msg) {
              var msgVal = msg.val();
              msgVal.key = msg.key();
              _actions2.default.messageReceived(msgVal);
            });
          }, 10);
        });
      });
    },

    success: _actions2.default.messagesReceived,
    error: _actions2.default.messagesFailed,
    loading: _actions2.default.messagesLoading
  },
  sendMessage: {
    remote: function remote(state) {
      return new Promise(function (resolve, reject) {
        if (!firebaseRef) {
          return resolve();
        }

        _db.ref.push({
          "message": state.message,
          "date": new Date().toUTCString(),
          "author": state.user.google.displayName,
          "userId": state.user.uid,
          "profilePic": state.user.google.profileImageURL
        });
        resolve();
      });
    },

    success: _actions2.default.messageSendSuccess,
    error: _actions2.default.messageSendError
  }
};

exports.default = MessageSource;