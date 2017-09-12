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
/**
   * get groups of a particular user
   * Route: get: '/group'
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {Response} response object
   */
var groupList = function groupList(app) {
  app.get('/group', function (req, res) {
    _firebase2.default.auth().onAuthStateChanged(function (user) {
      if (user) {
        var groupRef = _firebase2.default.database().ref('users/' + user.uid + '/groups/');
        var groups = [];
        groupRef.orderByKey().once('value', function (snapshot) {
          snapshot.forEach(function (childSnapShot) {
            var group = {
              groupId: childSnapShot.key,
              groupname: childSnapShot.val().groupname
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
          message: 'Please log in to see a list of your groups'
        });
      }
    });
  });
};

exports.default = groupList;