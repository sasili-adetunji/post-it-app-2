'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = signIn;
exports.signUp = signUp;
exports.google = google;
exports.signOut = signOut;
exports.saveUser = saveUser;
exports.resetPassword = resetPassword;
exports.addGroup = addGroup;
exports.message = message;
exports.readMessage = readMessage;
exports.showGroups = showGroups;
exports.getUsers = getUsers;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _PostItConstants = require('../constants/PostItConstants.js');

var _PostItConstants2 = _interopRequireDefault(_PostItConstants);

var _PostItDispatcher = require('../dispatchers/PostItDispatcher.js');

var _PostItDispatcher2 = _interopRequireDefault(_PostItDispatcher);

var _db = require('../../server/config/db');

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fb = _firebase2.default.database();

function signIn(loginDetails) {
  return function (dispatch) {
    return _firebase2.default.auth().signInWithEmailAndPassword(email, password);

    (0, _db.firebaseAuth)().currentUser.getToken(true).then(function (idToken) {
      (0, _PostItDispatcher2.default)({
        type: _PostItConstants2.default.LOGIN_USER,
        email: email
      });
      var jwt = idToken.uid;
      localStorage.setItem('jwt', jwt);
    }).catch(function (error) {
      (0, _PostItDispatcher2.default)({
        type: _PostItConstants2.default.LOGIN_ERROR,
        error: error.message,
        status: 'Unable to login'
      });
    });
  };
}

// export function signUp(signupDetails) {
//   console.log('reaches register action');
//   request
//   .post('user/signup')
//   .send(signupDetails)
//   .end((error, result) => {
//     if (error) {
//       console.log(error);
//     } else {
//       const userData = result.body.userData;
//       console.log(userData);
//       PostItDispatcher.handleServerAction({
//         type: PostItActionTypes.LOGIN_USER,
//         user: userData
//       });
//     }
//   });
// };


function signUp(email, password, username) {
  console.log('reaches register action');

  return _firebase2.default.auth().createUserWithEmailAndPassword(email, password);

  (0, _db.firebaseAuth)().currentUser.getToken(true).then(function (idToken) {
    (0, _PostItDispatcher2.default)({
      type: _PostItConstants2.default.REGISTER_USER,
      email: email
    });
    var jwt = idToken.uid;
    localStorage.setItem('jwt', jwt);
  }).catch(function (error) {
    (0, _PostItDispatcher2.default)({
      type: _PostItConstants2.default.REGISTER_ERROR,
      error: error.message,
      status: 'Unable to register'
    });
  });
}

function google() {
  return _axios2.default.post('user/google', {}).then(saveUser);
  (0, _db.firebaseAuth)().currentUser.getToken(true).then(function (idToken) {
    (0, _PostItDispatcher2.default)({
      type: _PostItConstants2.default.GOOGLE_LOGIN
    });
    var jwt = idToken.uid;
    localStorage.setItem('jwt', jwt);
  });
}

function signOut() {
  return function (dispatch) {
    return (0, _db.firebaseAuth)().signOut();
    (0, _PostItDispatcher2.default)({
      type: _PostItConstants2.default.SIGN_OUT
    });
  };
}

function saveUser(user) {
  return fb.child('users/' + user.uid + '/info').set({
    email: user.email
  }).then(function () {
    return user;
  });
}

function resetPassword(email) {
  return (0, _db.firebaseAuth)().sendPasswordResetEmail(email);
}

function addGroup(groupName) {
  return function (dispatch) {
    return _axios2.default.post('/group', {
      groupName: groupName
    });
    (0, _PostItDispatcher2.default)({
      type: _PostItConstants2.default.CREATE_GROUP,
      groupName: groupName
    }).catch(function (error) {
      (0, _PostItDispatcher2.default)({
        type: _PostItConstants2.default.REGISTER_ERROR,
        error: error.message,
        status: 'Unable to create group'
      });
    });
  };
}

function message(messageBody, groupId) {
  return function (dispatch) {
    return _axios2.default.post('/message', {
      messageBody: messageBody,
      groupId: groupId
    });
    (0, _PostItDispatcher2.default)({
      type: _PostItConstants2.default.SEND_MESSAGE,
      messageBody: messageBody
    }).catch(function (error) {
      (0, _PostItDispatcher2.default)({
        type: _PostItConstants2.default.MESSAGE_ERROR,
        error: error.message,
        status: 'Unable to send message to group'
      });
    });
  };
}
// export function readMessage () {
//   return firebaseAuth().onAuthStateChanged((user) => {
//     fb.ref('users').child(user.uid)
//    .child('groups').child('-KmfaBc5knfnVibo1hBf')
//    .on('child_added', (msg) => { 
//     let messageValue = msg.val();
//     console.log("New message", messageValue)
//   })
// })
// }

function readMessage() {
  return function (dispatch) {
    return (0, _db.firebaseAuth)().onAuthStateChanged(function (user) {
      fb.ref('users').child(user.uid).child('groups').child(groupId).once('value', function (snap) {
        var message = snap.val().info;
        (0, _PostItDispatcher2.default)({
          type: _PostItConstants2.default.VIEW_MESSAGE,
          message: message
        }).catch(function (error) {
          (0, _PostItDispatcher2.default)({
            type: _PostItConstants2.default.VIEW_MESSAGE_ERROR,
            error: error.message,
            status: 'Unable to send Message'
          });
        });
      });
    });
  };
}

// export function showGroups () {
// var messageValue, groupValue, messageKey;
//   return firebaseAuth().onAuthStateChanged((user) => {
//     fb.ref('users').child(user.uid)
//    .child('groups')
//    .on('child_added', (msg) => { 
//      messageKey = msg.key
//      messageValue = msg.val()
//    })
//    fb.ref('groups').on('child_added', (grp) => { 
//      groupValue = grp.val();
//       console.log("Show Groups", messageValue, messageKey)
//       console.log("Show Group Name ", groupValue.users.Id)

//   })
//   })
// }


function showGroups() {
  return function (dispatch) {
    return _firebase2.default.auth().onAuthStateChanged(function (user) {
      var groups = [];
      var groupsReference = fb.ref('users').child(user.uid).child('groups').on('child_added', function (msg) {
        var groupKeys = [];
        msg.forEach(function (groupMsg) {
          return groupKeys.push(groupMsg.key);
        });
        var promises = groupKeys.map(function (groupKey) {
          return new Promise(function (resolve) {
            var groupReference = fb.ref('groups/' + groupKey);
            groupReference.on('value', function (snap) {
              groups.push(snap.val());
              resolve();
            });
          });
        });
        Promise.all(promises).then(function (values) {
          console.log(values);
        });
      });
      //console.log(groups)
    });
  };
}

function getUsers() {
  return function (dispatch) {
    return fb.ref('users').once('value', function (snap) {
      var users = snap.val().info;
      (0, _PostItDispatcher2.default)({
        type: _PostItConstants2.default.GET_USERS,
        users: users
      }).catch(function (error) {
        (0, _PostItDispatcher2.default)({
          type: _PostItConstants2.default.GET_USERS_ERROR,
          error: error.message,
          status: 'Unable to login'
        });
      });
    });
  };
}