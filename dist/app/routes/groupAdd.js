'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// add to group route

var app = (0, _express2.default)();

/**
   * add member to a particular group
   * Route: post: '/group/:groupId/user'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */
var groupAdd = function groupAdd(app) {
  app.post('/group/:groupId/user', function (req, res) {
    var _req$body = req.body,
        groupId = _req$body.groupId,
        userId = _req$body.userId,
        userName = _req$body.userName;

    var user = _firebase2.default.auth().currentUser;
    var groupRef = _firebase2.default.database().ref('groups/' + groupId + '/users/' + userId + '/').set({
      userId: userId,
      userName: userName
    });
    var groupNames = _firebase2.default.database().ref('groups/' + groupId).orderByKey().once('value', function (snap) {
      var groupName = snap.val().groupName;
      var userRef = _firebase2.default.database().ref('users/' + userId + '/groups/' + groupId + '/groupInfo').set({
        groupId: groupId,
        groupName: groupName
      });
    });
    res.send({
      message: 'User successfully added'
    }).catch(function (error) {
      res.status(500).send({
        message: 'Error occurred ' + error.message
      });
    });
  });
};

exports.default = groupAdd;