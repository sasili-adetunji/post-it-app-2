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
    var groupname = req.body.groupname;
    _firebase2.default.auth().onAuthStateChanged(function (user) {
      var groupKey = fb.ref('groups/').push({
        groupname: groupname,
        groupadmin: user.email
      }).key;
      var groupRef = fb.ref('groups/' + groupKey + '/users/').set({
        Id: user.uid
      });
      var userRef = fb.ref('users/' + user.uid + '/groups/groupInfo').set({ groupid: groupKey,
        groupname: groupname
      }).then(function () {
        alert("Group Successfully created");
      }).catch(function (error) {});
    });
  });
};

exports.default = group;