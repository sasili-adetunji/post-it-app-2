'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// signin route
// using firebase authentication method

var app = (0, _express2.default)();

var signup = function signup(app) {
  app.post('/user/signup', function (req, res) {
    var _req$body = req.body,
        email = _req$body.email,
        password = _req$body.password,
        userName = _req$body.userName,
        phoneNumber = _req$body.phoneNumber;

    _firebase2.default.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
      user.updateProfile({
        displayName: userName
      });
      _firebase2.default.database().ref('users/').child(user.uid).set({
        userName: userName,
        email: email,
        phoneNumber: phoneNumber
      });
      res.json({ message: 'Welcome ' + user.email + '. You have successfully registered',
        user: user });
    }).catch(function (err) {
      var errorMessage = err.message;
      res.json({ message: errorMessage });
    });
  });
};

exports.default = signup;