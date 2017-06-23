'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _components = require('../components');

var _components2 = _interopRequireDefault(_components);

var _Home = require('../components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Dashbord = require('../components/protected/Dashbord');

var _Dashbord2 = _interopRequireDefault(_Dashbord);

var _Login = require('../components/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Register = require('../components/Register');

var _Register2 = _interopRequireDefault(_Register);

var _Group = require('../components/Group');

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _components2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/signin', component: _Login2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _Register2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/dashboard', component: _Dashbord2.default })
);