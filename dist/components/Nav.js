'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
  _inherits(Nav, _Component);

  function Nav() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Nav.__proto__ || Object.getPrototypeOf(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      authed: false,
      loading: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              ' ',
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' },
                'Home'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              ' ',
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/dashboard' },
                'Dashboard'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              this.state.authed ? _react2.default.createElement(
                'button',
                {
                  style: { border: 'none', background: 'transparent' }, onClick: this.handleSubmit.bind(this), className: 'navbar-brand' },
                'Logout'
              ) : _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/signup' },
                  'SignUp\xA0\xA0'
                ),
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/signin' },
                  'SignIn\xA0\xA0'
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      console.log("Logout");
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;