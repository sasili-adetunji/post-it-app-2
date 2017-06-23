'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _db = require('../../config/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var fb = _firebase2.default.database();

var message = function message(app, db) {
  app.post('/message', function (req, res) {
    var messageBody = req.body.messageBody;
    var groupId = req.body.groupId;
    firebaseAuth().onAuthStateChanged(function (user) {
      var groupRef = fb.ref('groups/' + groupId).child('messages').push({
        message: messageBody,
        postedby: user.email
      });
      fb.ref('users/' + user.uid + '/groups/' + groupId).set({ messages: messageBody });
      res.send({ message: 'Message Sent successfully to Group' }).then(function () {}).catch(function (error) {});
    });
  });
};
exports.default = message;