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
    var groupname = req.body.groupname;
    _firebase2.default.auth().onAuthStateChanged(function (user) {
      var groupKey = _firebase2.default.database().ref('groups/').push({
        groupname: groupname,
        groupadmin: user.email
      }).key;
      var groupRef = _firebase2.default.database().ref('groups/' + groupKey + '/users/' + user.uid + '/').set({
        Id: user.uid
      });
      var userRef = _firebase2.default.database().ref('users/' + user.uid + '/groups/' + groupKey + '/groupInfo').set({
        groupname: groupname
      }).catch(function (error) {});
    });
  });
};

exports.default = group;