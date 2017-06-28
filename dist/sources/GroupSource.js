'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _db = require('../../server/config/db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fb = _firebase2.default.database();

var GroupSource = {
  getGroups: {
    remote: function remote(state, selectedGroupKey) {
      return new Promise(function (resolve, reject) {
        fb.ref('channels').once('value', function (dataSnapshot) {
          var groups = dataSnapshot.val();
          selectedGroupKey = selectedGroupKey || _.keys(groups)[0];
          var selectedGroup = groups[selectedGroupKey];
          if (selectedGroup) {
            selectedGroup.selected = true;
          }
          resolve(groups);
        });
      });
    },

    success: _actions2.default.groupsReceived,
    error: _actions2.default.groupsFailed
  }
};

exports.default = GroupSource;