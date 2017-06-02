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

var app = (0, _express2.default)(); // add to group route

var fb = _firebase2.default.database();

var groupAdd = function groupAdd(app, db) {
  app.post('/group/:groupId/user', function (req, res) {

    var groupId = req.params.groupId;

    var newUserId = req.body.userId;

    // check if this is a signed in user
    _firebase2.default.auth().onAuthStateChanged(function (user) {
      if (user) {
        // get a reference to the groups users
        var groupRef = db.ref('/groups/' + groupId + '/users');

        // add new user to the group
        groupRef.child(newUserId).set({
          Id: newUserId
        });

        // add group to user's list of groups
        db.ref('/users/' + newUserId + '/groups').child(groupId).set({
          id: groupId
        });

        res.send({
          message: 'User added to group'
        });
      } else {
        res.send({
          message: 'You are not signed in right now!'
        });
      }
    });
  });
};

exports.default = groupAdd;