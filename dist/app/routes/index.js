'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _register = require('./register');

var _register2 = _interopRequireDefault(_register);

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

var _signout = require('./signout');

var _signout2 = _interopRequireDefault(_signout);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _groupAdd = require('./groupAdd');

var _groupAdd2 = _interopRequireDefault(_groupAdd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = function index(app, db) {
  (0, _register2.default)(app, db);
  (0, _login2.default)(app, db);
  (0, _signout2.default)(app, db);
  (0, _group2.default)(app, db);
  (0, _groupAdd2.default)(app, db);
};
exports.default = index;