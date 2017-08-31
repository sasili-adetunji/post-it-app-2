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

var usersInGroup = function usersInGroup(app) {
  app.get('/group/:groupId/users', function (req, res) {
    _firebase2.default.auth().onAuthStateChanged(function (user) {
      if (user) {
        var users = [];
        var userRef = _firebase2.default.database().ref('/groups/' + req.params.groupId + '/users').once('value', function (msg) {
          msg.forEach(function (snapshot) {
            var user = {
              id: snapshot.key,
              userId: snapshot.val().userId
            };
            users.push(user);
          }).then(function () {
            res.send({
              users: users
            });
          }).catch(function (error) {
            res.status(500).send({
              message: 'Error occurred ' + error.message
            });
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

exports.default = usersInGroup;