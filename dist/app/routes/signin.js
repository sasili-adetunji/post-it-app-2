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

var app = (0, _express2.default)(); // login route
// using firebase authentication method

var signin = function signin(app, db) {
  app.post('/user/signin', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    _firebase2.default.auth().signInWithEmailAndPassword(email, password).then(function (user) {
      res.send({
        message: 'Success: you have successfuly signed in.',
        user: user
      });
    }).catch(function (err) {
      res.send({ message: 'Error: The email or password of the user is invalid' });
    });
  });
};

exports.default = signin;