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
var usersRef = fb.ref("users");

var signup = function signup(app, db) {
  app.post('/user/signup', function (req, res) {
    var userName = req.body.userName,
        email = req.body.email,
        password = req.body.password;
    _firebase2.default.auth().createUserWithEmailAndPassword(email, password);
    var user = {};
    user.name = userName, email = email;
    usersRef.push({
      username: userName,
      email: email
    }).then(function (user) {
      res.send({ message: 'Registration successful. ' + userName + ' have successfully been registered' });
    }).catch(function (err) {
      res.json({ message: 'Error signing in ' });
    });
  });
};
exports.default = signup;