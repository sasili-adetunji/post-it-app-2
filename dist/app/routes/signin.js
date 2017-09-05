'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// login route
// using firebase authentication method

var app = (0, _express2.default)();
var signin = function signin(app) {
  app.post('/user/signin', function (req, res) {
    var _req$body = req.body,
        email = _req$body.email,
        password = _req$body.password;

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