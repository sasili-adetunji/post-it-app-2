'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _signup = require('./signup');

var _signup2 = _interopRequireDefault(_signup);

var _signin = require('./signin');

var _signin2 = _interopRequireDefault(_signin);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _groupAdd = require('./groupAdd');

var _groupAdd2 = _interopRequireDefault(_groupAdd);

var _signout = require('./signout');

var _signout2 = _interopRequireDefault(_signout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const router = express.Router()

// router.post('/user/signup', signup)

// router.post('/user/signin', signin);

// router.post('/user/signout', signout);

// router.post('/group', group);

// router.post('/group/:groupId', groupAdd)

// router.get(z
// 	express.static(path.join(__dirname, "../client/public")))


var index = function index(app, db) {
  (0, _signup2.default)(app, db);
  (0, _signin2.default)(app, db);
  (0, _signout2.default)(app, db);
  (0, _group2.default)(app, db);
  (0, _groupAdd2.default)(app, db);
}; // import all the route into a single index file
exports.default = index;