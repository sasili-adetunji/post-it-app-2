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
  *  get groups of a particular user
  * Route: GET: /user/groups
  * @param {Object} req request object
  * @param {Object} res response object
  * @returns {Response} response object
  */

var userGroup = function userGroup(app) {
  app.get('/user/groups', function (req, res) {

    var user = _firebase2.default.auth().currentUser;
    if (user) {
      var groups = [];
      _firebase2.default.database().ref('users/' + user.uid + '/groups/').orderByKey().once('value', function (snapshot) {
        snapshot.forEach(function (childSnapShot) {
          var group = {
            groupId: childSnapShot.val().groupInfo.groupId,
            groupName: childSnapShot.val().groupInfo.groupName
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
};

exports.default = userGroup;