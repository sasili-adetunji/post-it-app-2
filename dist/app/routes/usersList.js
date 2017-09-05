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

var usersList = function usersList(app) {
  app.get('/user/users', function (req, res) {
    _firebase2.default.auth().onAuthStateChanged(function (user) {
      if (user) {
        var users = [];
        var userRef = _firebase2.default.database().ref('users/').once('value', function (msg) {
          msg.forEach(function (snapshot) {
            var user = {
              userId: snapshot.key,
              username: snapshot.val().username
            };
            users.push(user);
          });
        }).then(function () {
          res.send({
            users: users
          });
        }).catch(function (error) {
          res.status(500).json({
            message: 'Error occurred ' + error.message
          });
        });
      } else {
        res.status(403).send({
          message: 'You are not signed in right now! '
        });
      }
    });
  });
};

exports.default = usersList;