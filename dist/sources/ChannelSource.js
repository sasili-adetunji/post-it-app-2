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

var firebaseRef = new _firebase2.default('https://postit-335c1.firebaseio.com/groups');

var ChannelSource = {
  getChannels: {
    remote: function remote(state, selectedChannelKey) {
      return new Promise(function (resolve, reject) {
        _db.ref.child('groups').once("value", function (dataSnapshot) {
          var channels = dataSnapshot.val();
          selectedChannelKey = selectedChannelKey || _.keys(channels)[0];
          var selectedChannel = channels[selectedChannelKey];
          if (selectedChannel) {
            selectedChannel.selected = true;
          }
          resolve(channels);
        });
      });
    },

    success: _actions2.default.channelsReceived,
    error: _actions2.default.channelsFailed
  }
};

exports.default = ChannelSource;