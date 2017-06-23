'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveUser = saveUser;

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
var usersRef = fb.ref('users');

var signup = function signup(app, db) {
  app.post('/user/signup', function (req, res) {
    var username = req.body.username,
        email = req.body.email,
        password = req.body.password;
    _firebase2.default.auth().createUserWithEmailAndPassword(email, password).then(saveUser).then(function () {
      res.send({ message: 'Registration successful. You have successfully been registered' });
    }).catch(function (error) {
      var errorMessage = error.message;
      res.status(400).send({ message: 'Error signing up: ', errorMessage: errorMessage });
    });
  });
};

function saveUser(user) {
  return fb.child('users/' + user.uid + '/info').set({
    email: user.email
  }).then(function () {
    return user;
  });
}

exports.default = signup;