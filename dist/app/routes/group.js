'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create group routes

var app = (0, _express2.default)();

var group = function group(app) {
  app.post('/group', function (req, res) {
    var _req$body = req.body,
        groupName = _req$body.groupName,
        userName = _req$body.userName;

    _firebase2.default.auth().onAuthStateChanged(function (user) {
      var groupKey = _firebase2.default.database().ref('groups/').push({
        groupName: groupName,
        groupAdmin: user.email
      }).key;
      var groupRef = _firebase2.default.database().ref('groups/' + groupKey + '/users/' + user.uid).set({
        userId: user.uid,
        userName: userName
      });
      var userRef = _firebase2.default.database().ref('users/' + user.uid + '/groups/' + groupKey + '/groupInfo').set({
        groupId: groupKey,
        groupName: groupName
      });
      res.json({
        message: 'New Group Successfully Created',
        group: groupName
      }).catch(function (error) {});
    });
  });
};

exports.default = group;