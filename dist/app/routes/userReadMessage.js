'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var fb = _firebase2.default.database();

/**
   * Get users that have read a particular message
   * Route: GET: group/:messageId/readUsers
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */

var userReadMessage = function userReadMessage(app) {
  app.get('/group/:messageId/readUsers', function (req, res) {
    // const messageId = req.body.messageId;
    _firebase2.default.auth().onAuthStateChanged(function (user) {
      if (user) {
        var readUsers = [];
        _firebase2.default.database().ref('readUsers/' + req.params.messageId).orderByKey().once('value', function (snapshot) {
          snapshot.forEach(function (childSnapShot) {
            var userDetails = {
              userName: childSnapShot.val().userName
            };
            readUsers.push(userDetails);
          });
        }).then(function () {
          res.json({
            readUsers: readUsers
          });
        }).catch(function (error) {
          res.status(500).json({
            message: 'Error occurred ' + error.message
          });
        });
      } else {
        res.status(403).json({
          message: 'Please log in to see a list of users that read messages'
        });
      }
    });
  });
};

exports.default = userReadMessage;