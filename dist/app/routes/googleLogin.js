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
    var provider = new _db.firebaseAuth().GoogleAuthProvider();
    return _firebase2.default.auth().signInWithPopup(provider);
    res.send({
      message: 'Success: you have successfuly signed in with google.'
    }).catch(function (err) {
      var errorMessage = error.message;
      res.status(400).send({
        message: 'Error signing up with Google: ', errorMessage: errorMessage
      });
    });
  });
};

exports.default = googleLogin;