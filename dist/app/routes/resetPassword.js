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
/**
   *  reset password route
   * Route: POST: /user/reset
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */

var resetPassword = function resetPassword(app) {
  app.post('/user/reset', function (req, res) {
    var email = req.body.email;

    _firebase2.default.auth().sendPasswordResetEmail(email).then(function () {
      res.json({
        message: 'An email has been sent to your email'
      });
    }).catch(function (err) {
      res.json({
        message: 'There appear to be ' + err.message
      });
    });
  });
};
exports.default = resetPassword;