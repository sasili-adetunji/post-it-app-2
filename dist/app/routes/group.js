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

/**
   * create group
   * Route: post: '/group'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */
var group = function group(app) {
  app.post('/group', function (req, res) {
    var groups = [];
    var _req$body = req.body,
        groupName = _req$body.groupName,
        userName = _req$body.userName;

    var user = _firebase2.default.auth().currentUser;
    if (user) {
      var groupKey = _firebase2.default.database().ref('groups/').push({
        groupName: groupName,
        groupAdmin: user.email
      }).key;
      var groupRef = _firebase2.default.database().ref('groups/' + groupKey + '/users/' + user.uid).set({
        userId: user.uid,
        userName: userName
      }).then(function () {
        var groupDetails = {
          groupName: groupName,
          groupId: groupKey
        };
        groups.push(groupDetails);
      }).then(function () {
        var userRef = _firebase2.default.database().ref('users/' + user.uid + '/groups/' + groupKey + '/groupInfo').set({
          groupId: groupKey,
          groupName: groupName
        });
        res.status(200).json({
          message: 'New Group Successfully Created',
          groups: groups
        });
      }).catch(function (error) {});
    } else {
      res.status(403).json({
        message: 'Please log in to post to groups'
      });
    }
  });
};

exports.default = group;