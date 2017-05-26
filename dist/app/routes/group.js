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
var usersRef = fb.ref('groups');

var group = function group(app, db) {
  app.post('/users/group', function (req, res) {
    _firebase2.default.auth().onAuthStateChanged(function (user) {
      // to make sure a user is in session
      if (user) {
        var group_name = void 0,
            adminId = void 0;
        // use the uid of the admin which is still the user at the point
        usersRef.push({
          adminId: user.uid,
          group_name: req.body.group_name
        });
        res.json({ message: 'Success: You have created a new Group.' });
      } else {
        res.json({ message: 'Error: You have to sign in before adding creating group' });
      }
    });
  });
};
exports.default = group;