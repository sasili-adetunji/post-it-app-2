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

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _nodemailerSmtpTransport = require('nodemailer-smtp-transport');

var _nodemailerSmtpTransport2 = _interopRequireDefault(_nodemailerSmtpTransport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var fb = _firebase2.default.database();

var emails = [];
var userIds = [];
var transporter = _nodemailer2.default.createTransport((0, _nodemailerSmtpTransport2.default)({
  service: 'gmail',
  auth: {
    user: 'sasil.adetunji@gmail.com',
    pass: 'olanrewaju2012?'
  }
}));

var mailOptions = {
  from: 'sasil.adetunji@gmail.com',
  subject: 'A new message from PostIt'
};
var message = function message(app, db) {
  app.post('/message', function (req, res) {
    var message = req.body.message;
    var groupId = req.body.groupId;
    var priorityLevel = req.body.priorityLevel;

    _firebase2.default.auth().onAuthStateChanged(function (user) {
      var groupRef = _firebase2.default.database().ref('groups/' + groupId + '/messages').push().set({
        message: message
      }).then(function () {
        var userRef = _firebase2.default.database().ref('groups/' + groupId + '/users/');
        userRef.orderByKey().once('value', function (snapshot) {
          snapshot.forEach(function (childSnapShot) {
            userIds.push(childSnapShot.val().Id);
          });
          userIds.forEach(function (uid) {
            var userRef2 = _firebase2.default.database().ref('users/' + uid + '/groups/' + groupId + '/messages');
            userRef2.push().set({
              message: message
            });
            if (priorityLevel === "Critical" || priorityLevel === "Urgent") {
              var userEmailRef = _firebase2.default.database().ref('users/' + uid + '/').once('value', function (snap) {
                emails.push(snap.val().email);
                emails.forEach(function (email) {
                  mailOptions.to = email;
                  mailOptions.text = message;
                  transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                      return console.log(error);
                    }
                    console.log('Message %s sent: %s', info.messageId, info.response);
                  });
                });
              });
            }
          });
        });
        res.send({ message: 'Message Sent successfully to Group' });
      }).catch(function (error) {
        result.status(500).send({
          message: 'Error occurred ' + error.message
        });
      });
    });
  });
};

exports.default = message;