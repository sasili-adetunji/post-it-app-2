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

    var provider = new _firebase2.default.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return (0, _db.firebaseAuth)().signInWithPopup(provider);
    res.json({ message: 'Success: you have successfuly signed in with google.' });
    res.redirect('/dashboard').catch(function (err) {
      res.send({ message: 'Error: Can not login using Google' });
    });
  });
};

exports.default = googleLogin;