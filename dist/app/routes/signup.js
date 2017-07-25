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

var app = (0, _express2.default)(); // signin route
// using firebase authentication method

var fb = _firebase2.default.database();

var signup = function signup(app, db) {
  app.post('/user/signup', function (req, res) {
    var email = req.body.email,
        password = req.body.password,
        username = req.body.username,
        phoneNumber = req.body.phoneNumber;
    _firebase2.default.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
      user.updateProfile({
        displayName: username
      }).then(function () {
        var userRef = _firebase2.default.database().ref('users/');
        userRef.child(user.uid).set({
          username: username,
          email: email,
          phoneNumber: phoneNumber
        });
        res.send({ message: 'Welcome ' + user.email + '. You have successfully registered' });
      });
    }).catch(function (error) {
      var errorMessage = error.message;
      res.status(400).send({ message: 'Error signing up: ', errorMessage: errorMessage });
    });
  });
};

exports.default = signup;