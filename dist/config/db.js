'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ref = exports.firebaseAuth = undefined;

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  apiKey: 'AIzaSyAPkaQ0wLHWqT_u20dcXLqPENZsmea7mgs',
  authDomain: 'postit-335c1.firebaseapp.com',
  databaseURL: 'https://postit-335c1.firebaseio.com',
  projectId: 'postit-335c1',
  storageBucket: 'postit-335c1.appspot.com',
  messagingSenderId: '63329792793'
};
var db = _firebase2.default.initializeApp(config);
var firebaseAuth = exports.firebaseAuth = _firebase2.default.auth;
var ref = exports.ref = _firebase2.default.database().ref();
exports.default = db;

// export const messaging = firebase.messaging