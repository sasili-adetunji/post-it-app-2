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
    var newUser = req.body.userId;
    _firebase2.default.auth().onAuthStateChanged(function (user) {
      var groupRef = fb.ref('groups/' + groupId + '/users/' + newUser + '/').set({
        Id: newUser
      });

      var groupNames = fb.ref('groups/' + groupId).orderByKey().once('value', function (snap) {
        var groupname = snap.val().groupname;

        var userRef = fb.ref('users/' + newUser + '/groups/' + groupId + '/groupInfo').set({
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