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

// google route
//using firebase authentication method

var app = (0, _express2.default)();
var googleLogin = function googleLogin(app, db) {
  app.post('/user/google', function (req, res) {
    var token, email, uid, displayName;
    var provider = new _firebase2.default.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    (0, _db.firebaseAuth)().signInWithPopup(provider).then(function (result) {
      token = result.credential.accessToken;
      email = result.user.email;
      uid = result.user.uid;
      displayName = result.user.displayName;
    }).then(function (user) {
      user.updateProfile({
        displayName: username
      });
      var userRef = _firebase2.default.database().ref('users/').child(uid).set({
        username: username,
        email: email
      });
      res.send({
        message: 'Success: you have successfuly signed in.'
      });
    }).catch(function (error) {
      res.send({ message: 'Error: The email or password of the user is invalid' });
    });
  });
};

exports.default = googleLogin;