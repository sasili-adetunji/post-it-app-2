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

var groupAdd = function groupAdd(app) {
  app.post('/group/:groupId/user', function (req, res) {
    var _req$body = req.body,
        groupId = _req$body.groupId,
        userId = _req$body.userId,
        userName = _req$body.userName;

    _firebase2.default.auth().onAuthStateChanged(function (user) {
      var groupRef = _firebase2.default.database().ref('groups/' + groupId + '/users/' + userId + '/').set({
        userId: userId,
        userName: userName
      });
      var groupNames = _firebase2.default.database().ref('groups/' + groupId).orderByKey().once('value', function (snap) {
        var groupname = snap.val().groupname;
        var userRef = _firebase2.default.database().ref('users/' + userId + '/groups/' + groupId + '/groupInfo').set({
          groupId: groupId,
          groupname: groupname
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
  });
};

exports.default = groupAdd;