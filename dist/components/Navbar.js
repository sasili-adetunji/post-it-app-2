'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navbar() {
  return _react2.default.createElement(
    'div',
    { className: 'container-fluid navbar navbar-default' },
    _react2.default.createElement(
      'div',
      { className: 'navbar-header' },
      _react2.default.createElement(
        'ul',
        { className: 'nav navbar-nav' },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(
            'div',
            { className: 'navbar-header' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { exact: true, activeClassName: 'active', to: '/signin' },
                'Sign In'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { activeClassName: 'active', to: '/signup' },
                'Signup'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouterDom.NavLink,
                { activeClassName: 'active', to: '/dashboard' },
                'Dashboard'
              )
            )
          )
        )
      )
    )
  );
}
module.exports = Navbar;