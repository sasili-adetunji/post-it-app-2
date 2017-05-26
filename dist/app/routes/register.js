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

var register = function register(app, db) {
  app.post('/register', function (req, res) {
    var userName = req.body.userName,
        email = req.body.email,
        password = req.body.password;
    _firebase2.default.auth().createUserWithEmailAndPassword(email, password);
    var user = {};
    user.name = req.body.userName;
    user.email = req.body.email;
    // save the information in database
    usersRef.push({
      userName: req.body.userName,
      email: req.body.email
    }).then(function (user) {
      res.json({ message: "Success: A user has been successfuly registered." });
    }).catch(function (err) {
      res.json({ message: "Error in registration. Check your details again" });
    });
  });
};
exports.default = register;