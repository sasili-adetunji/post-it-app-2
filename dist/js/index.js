'use strict';

var _firebaseFunctions = require('firebase-functions');

var _firebaseFunctions2 = _interopRequireDefault(_firebaseFunctions);

var _firebaseAdmin = require('firebase-admin');

var _firebaseAdmin2 = _interopRequireDefault(_firebaseAdmin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_firebaseAdmin2.default.initializeApp(_firebaseFunctions2.default.config().firebase);
var _ = require('lodash');

exports.sendNotification = _firebaseFunctions2.default.database.ref('/users/{userId}/groups/{groupId}/messages/{messageId}').onWrite(function (event) {
    var userId = event.params.userId;
    var groupId = event.params.groupId;
    var messageId = event.params.messageId;
    var messageStateChanged = false;
    var messageCreated = false;

    if (!event.previous.exists()) {
        messageCreated = true;
    }
    if (!messageCreated && event.data.changed()) {
        messageStateChanged = true;
    }
    var msg = 'A message state was changed';
    if (messageCreated) {
        msg = 'The following new message was posted to the message: ' + messages.messageText;
    }

    return loadUsers().then(function (users) {
        var tokens = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var user = _step.value;

                tokens.push(user.pushToken);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var payload = {
            notification: {
                title: 'Message Notification',
                body: msg,
                sound: 'default',
                badge: '1'
            }
        };
        return _firebaseAdmin2.default.messaging().sendToDevice(tokens, payload).then(function (response) {
            console.log("Successfully sent message:", response);
        }).catch(function (error) {
            console.log("Error sending message:", error);
        });
    });
});
function loadUsers() {
    var dbRef = _firebaseAdmin2.default.database().ref('/users');
    var defer = new Promise(function (resolve, reject) {
        dbRef.once('value', function (snap) {
            var data = snap.val();
            var users = [];
            for (var property in data) {
                users.push(data[property]);
            }
            resolve(users);
        }, function (err) {
            reject(err);
        });
    });
    return defer;
}