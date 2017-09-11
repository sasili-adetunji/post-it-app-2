'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var fb = _firebase2.default.database();

var userMessage = function userMessage(app) {
  app.get('/group/:groupId/messages', function (req, res) {
    _firebase2.default.auth().onAuthStateChanged(function (user) {
      if (user) {
        var messages = [];
        _firebase2.default.database().ref('users/' + user.uid + '/groups/' + req.params.groupId + '/messages/').orderByKey().once('value', function (snapshot) {
          snapshot.forEach(function (childSnapShot) {
            var message = {
              messageId: childSnapShot.key,
              messageText: childSnapShot.val().message,
              author: childSnapShot.val().author,
              priorityLevel: childSnapShot.val().priorityLevel,
              date: childSnapShot.val().date,
              status: childSnapShot.val().status
            };
            messages.push(message);
            _firebase2.default.database().ref('users/' + user.uid + '/groups/' + req.params.groupId + '/messages/' + childSnapShot.key + '/').update({
              status: 'Read'
            });
            _firebase2.default.database().ref('readUsers/' + childSnapShot.key + '/' + user.uid).set({
              userId: user.uid,
              userName: user.displayName
            });
          });
        }).then(function () {
          res.send({
            messages: messages
          });
        }).catch(function (error) {
          res.status(500).send({
            message: 'Error occurred ' + error.message
          });
        });
      } else {
        res.status(403).send({
          message: 'Please log in to see a list of your groups'
        });
      }
    });
  });
};

exports.default = userMessage;