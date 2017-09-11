'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// signout route

var app = (0, _express2.default)();

var signout = function signout(app) {
  app.get('/user/signout', function (req, res) {
    _firebase2.default.auth().signOut().then(function () {
      res.json({
        message: 'You have signed out of the Appliction'
      });
    }).catch(function (err) {
      res.json({
        message: 'There appear to be ' + err.message + ' with signing out'
      });
    });
  });
};
exports.default = signout;