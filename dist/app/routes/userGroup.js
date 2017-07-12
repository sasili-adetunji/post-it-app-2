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

var userGroup = function userGroup(app, db) {
  app.get('/user/groups', function (req, res) {
    _firebase2.default.auth().onAuthStateChanged(function (user) {
      if (user) {
        var groupRef = _firebase2.default.database().ref('users/' + user.uid + '/groups/');
        var groups = [];

        groupRef.orderByKey().once('value', function (snapshot) {
          snapshot.forEach(function (childSnapShot) {
            var group = {
              groupId: childSnapShot.key,
              groupname: childSnapShot.val().groupInfo.groupname
            };
            groups.push(group);
          });
        }).then(function () {
          res.send({
            groups: groups
          });
        }).catch(function (error) {
          res.status(500).send({
            message: 'Error occurred ' + error.message
          });
        });
      } else {
        res.status(403).send({
          message: 'You are not signed in right now! '
        });
      }
    });
  });
};

exports.default = userGroup;