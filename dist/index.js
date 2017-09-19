'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

var _PostItStore = require('./stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (localStorage.getItem('user')) {
  _PostItStore2.default.setIsAuthenticated(true);
}

_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  { basename: '/#' },
  _react2.default.createElement(_components2.default, null)
), document.getElementById('root'));