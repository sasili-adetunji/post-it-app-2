'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// resetpassword route

var app = (0, _express2.default)();

var resetPassword = function resetPassword(app) {
  app.post('/user/reset', function (req, res) {
    var email = req.body.email;
    _firebase2.default.auth().sendPasswordResetEmail(email).then(function () {
      res.send({
        message: 'An email has been sent to your email'
      });
    }).catch(function (err) {
      res.send({
        message: 'There appear to be ' + err.message
      });
    });
  });
};
exports.default = resetPassword;