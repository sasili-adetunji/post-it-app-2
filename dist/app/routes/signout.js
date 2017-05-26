'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _db = require('../../config/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // signout route

module.exports = function (app, db) {
  app.post('/signout', function (req, res) {
    var full_name = req.body.full_name,
        email = req.body.email,
        password = req.body.password;

    // using firebase signout methods

    _firebase2.default.auth().signOut().then(function () {
      // redirect to home page after signout
      res.redirect('/');
    }).catch(function (err) {
      console.log(err);
    });
  });
};