'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Route = _reactRouter2.default.Route;
var DefaultRoute = _reactRouter2.default.DefaultRoute;

var routes = _react2.default.createElement(
  Route,
  { path: '/', handler: _components2.default },
  _react2.default.createElement(DefaultRoute, { handler: _Home2.default }),
  _react2.default.createElement(Route, { path: 'group', handler: _Group2.default }),
  _react2.default.createElement(Route, { path: 'group/:groupId', handler: _Group2.default }),
  _react2.default.createElement(Route, { path: 'signin', handler: _Login2.default }),
  _react2.default.createElement(Route, { path: 'signup', handler: _Register2.default }),
  _react2.default.createElement(Route, { path: 'dashboard', handler: _Dashbord2.default })
);

_reactRouter2.default.run(routes, _reactRouter2.default.HashLocation, function (Root) {
  _react2.default.render(_react2.default.createElement(Root, null), document.getElementById('root'));
});