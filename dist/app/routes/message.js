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
    var message = req.body.message;
    var groupId = req.body.groupId;
    _firebase2.default.auth().onAuthStateChanged(function (user) {
      var groupRef = _firebase2.default.database().ref('groups/' + groupId + '/messages').push().set({
        message: message
      }).then(function () {
        var userRef = _firebase2.default.database().ref('groups/' + groupId + '/users/');
        userRef.orderByKey().once('value', function (snapshot) {
          snapshot.forEach(function (childSnapShot) {
            var userRef2 = _firebase2.default.database().ref('users/' + childSnapShot.val() + '/groups/' + groupId + '/messages');
            userRef2.push().set({
              message: message
            });
          });
        });

        res.send({ message: 'Message Sent successfully to Group' });
      }).catch(function (error) {
        result.status(500).send({
          message: 'Error occurred ' + error.message
        });
      });
    });
  });
};

exports.default = message;