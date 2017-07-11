'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _db = require('../../server/config/db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var firebaseRef = null;
var fb = _firebase2.default.database();

var GroupSource = {
  getGroups: {
    remote: function remote(state) {
      return new Promise(function (resolve, reject) {
        return _axios2.default.get('/user/groups');
        resolve(groups);
      });
    },


    success: _actions2.default.groupsReceived,
    error: _actions2.default.groupsFailed
  },
  addGroup: {
    remote: function remote(state) {
      return new Promise(function (resolve, reject) {
        return _axios2.default.post('/group', groupname);
        resolve();
      });
    },

    success: _actions2.default.groupAddedSuccess,
    error: _actions2.default.groupAddedFailed
  },
  addMembersToGroup: {
    remote: function remote(state) {
      return new Promise(function (resolve, reject) {
        return _axios2.default.post('/group/:groupId/user', userId);
        resolve();
      });
    },

    success: _actions2.default.memberAddedSuccess,
    error: _actions2.default.memberAddedFailed
  }
};

exports.default = GroupSource;