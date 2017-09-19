'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firebaseAuth = undefined;

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var nodeEnv = process.env.NODE_ENV || 'development';
var prefix = '';

if (nodeEnv === 'test') {
  prefix = 'TEST_';
}

var config = {
  apiKey: process.env[prefix + 'apiKey'],
  authDomain: process.env[prefix + 'authDomain'],
  databaseURL: process.env[prefix + 'databaseURL'],
  projectId: process.env[prefix + 'projectId'],
  storageBucket: process.env[prefix + 'storageBucket'],
  messagingSenderId: process.env[prefix + 'messagingSenderId']
};

var db = _firebase2.default.initializeApp(config);

var firebaseAuth = exports.firebaseAuth = _firebase2.default.auth;
exports.default = db;