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

var usersList = function usersList(app, db) {
  app.get('/user/users', function (req, res) {

    _firebase2.default.auth().onAuthStateChanged(function (user) {
      if (user) {
        var users = new Map();

        var userRef = fb.ref('users').once('value', function (msg) {
          msg.forEach(function (snapshot) {
            users.set(snapshot.key, snapshot.val());
          });
          res.send({
            users: users
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