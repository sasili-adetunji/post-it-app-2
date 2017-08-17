'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _groupList = require('./groupList');

var _groupList2 = _interopRequireDefault(_groupList);

var _usersList = require('./usersList');

var _usersList2 = _interopRequireDefault(_usersList);

var _userGroup = require('./userGroup');

var _userGroup2 = _interopRequireDefault(_userGroup);

var _userMessage = require('./userMessage');

var _userMessage2 = _interopRequireDefault(_userMessage);

var _googleLogin = require('./googleLogin');

var _googleLogin2 = _interopRequireDefault(_googleLogin);

var _resetPassword = require('./resetPassword');

var _resetPassword2 = _interopRequireDefault(_resetPassword);

var _usersInGroup = require('./usersInGroup');

var _usersInGroup2 = _interopRequireDefault(_usersInGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = function index(app) {
  (0, _signup2.default)(app);
  (0, _signin2.default)(app);
  (0, _signout2.default)(app);
  (0, _group2.default)(app);
  (0, _message2.default)(app);
  (0, _groupAdd2.default)(app);
  (0, _usersList2.default)(app);
  (0, _groupList2.default)(app);
  (0, _userMessage2.default)(app);
  (0, _userGroup2.default)(app);
  (0, _googleLogin2.default)(app);
  (0, _resetPassword2.default)(app);
  (0, _usersInGroup2.default)(app);
}; // import all the route into a single index file
exports.default = index;