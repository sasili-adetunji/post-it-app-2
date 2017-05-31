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

var app = (0, _express2.default)(); // create group routes

var fb = _firebase2.default.database();

var group = function group(app, db) {
  app.post('/group', function (req, res) {
    var groupName = req.body.groupName;

    // check that a user is signed in before you try to add group
    _firebase2.default.auth().onAuthStateChanged(function (user) {
      if (user) {
        // This means a user is signed in
        var userId = user.uid;

        // create a new group and return the unique key
        var newGroupKey = fb.ref().child('groups').push({
          groupName: groupName,
          groupadmin: userId
        }).key;

        // add user id to list of group members. An admin of a group is an automatic member of the group
        fb.ref().child('groups/' + newGroupKey + '/users/' + userId).set({
          Id: userId
        });

        // add group key to list of a user's/admin group
        fb.ref('/users/' + userId + '/groups/').child(newGroupKey).set({ id: newGroupKey });

        res.send({
          message: 'Group ' + groupName + ' was successfully created '
        });
      } else {
        res.status(403).send({
          // user is not signed in
          message: 'You are not signed in right now!'
        });
      }
    });
  });
};
exports.default = group;