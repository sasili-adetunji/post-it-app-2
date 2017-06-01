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

var app = (0, _express2.default)(); // signout route

var signout = function signout(app, db) {
  app.post('/signout', function (req, res) {

    // using firebase signout methods

    _firebase2.default.auth().signOut().then(function () {
      // redirect to home page after signout
      res.send({
        message: 'You have signed out f the Appliction'
      });
    }).catch(function (err) {
      res.json({
        message: 'There appear to be ' + err.message + ' with signing out'
      });
    });
  });
};
exports.default = signout;