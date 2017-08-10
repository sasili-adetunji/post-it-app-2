'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _db = require('../../config/db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // google route
// using firebase authentication method

var googleLogin = function googleLogin(app, db) {
  app.post('/user/google', function (req, res) {
    var token = void 0,
        email = void 0,
        uid = void 0,
        displayName = void 0;
    var provider = new _firebase2.default.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    (0, _db.firebaseAuth)().signInWithPopup(provider).then(function (result) {
      token = result.credential.accessToken;
      email = result.user.email;
      uid = result.user.uid;
      displayName = result.user.displayName;
    }).then(function (snap) {
      var userRef = _firebase2.default.database().ref('users/').child(uid).set({
        username: displayName,
        email: email
      });
    }).catch(function (error) {
      res.send({
        message: error.message
      });
    });
  });
};

exports.default = googleLogin;