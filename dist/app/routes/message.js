'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _nodemailerSmtpTransport = require('nodemailer-smtp-transport');

var _nodemailerSmtpTransport2 = _interopRequireDefault(_nodemailerSmtpTransport);

var _nexmo = require('nexmo');

var _nexmo2 = _interopRequireDefault(_nexmo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var fb = _firebase2.default.database();
var emails = [];
var userIds = [];
var numbers = [];

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

var nexmo = new _nexmo2.default({
  apiKey: 'a4e15f2c',
  apiSecret: 'c88f4f0e7092b986'
});

var message = function message(app) {
  app.post('/message', function (req, res) {
    var _req$body = req.body,
        message = _req$body.message,
        groupId = _req$body.groupId,
        priorityLevel = _req$body.priorityLevel,
        date = _req$body.date,
        author = _req$body.author;

    _firebase2.default.auth().onAuthStateChanged(function (user) {
      var messageKey = _firebase2.default.database().ref('groups/' + groupId + '/messages').push({
        message: message,
        author: author,
        date: date,
        priorityLevel: priorityLevel
      }).key;
      var userRef = _firebase2.default.database().ref('groups/' + groupId + '/users/').once('value', function (snapshot) {
        snapshot.forEach(function (childSnapShot) {
          _firebase2.default.database().ref('users/' + childSnapShot.val().userId + '/groups/' + groupId + '/messages/' + messageKey).set({
            message: message,
            author: author,
            date: date,
            priorityLevel: priorityLevel
          });
          if (priorityLevel === 'Critical' || priorityLevel === 'Urgent') {
            _firebase2.default.database().ref('users/' + childSnapShot.val().userId + '/').once('value', function (snap) {
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
          if (priorityLevel === 'Critical') {
            _firebase2.default.database().ref('users/' + childSnapShot.val().userId + '/').once('value', function (msg) {
              numbers.push(msg.val().phoneNumber);
              numbers.forEach(function (number) {
                nexmo.message.sendSms('PostIt', number, message, function (err, responseData) {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log(responseData);
                  }
                });
              });
            });
          }
        });
        res.send({ message: 'Message Sent successfully to Group' });
      }).catch(function (error) {
        res.status(500).send({
          message: 'Error occurred ' + error.message
        });
      });
    });
  });
};

exports.default = message;