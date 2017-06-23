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

var groupList = function groupList(app, db) {

       app.get('/group', function (req, res) {
              var userRef = fb.ref().child('groups').once('child_added', function (msg) {
                     var data = msg.val();
                     res.send(data);
              });
       });
};

exports.default = groupList;