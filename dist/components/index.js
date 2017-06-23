'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _Register = require('./Register');

var _Register2 = _interopRequireDefault(_Register);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _Dashbord = require('./protected/Dashbord');

var _Dashbord2 = _interopRequireDefault(_Dashbord);

var _Navbar = require('./Navbar');

var _reactRouter = require('react-router');

var _PostItAuth = require('../actions/PostItAuth.js');

var _db = require('../../server/config/db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function PrivateRoute(_ref) {
  var Component = _ref.component,
      authed = _ref.authed,
      rest = _objectWithoutProperties(_ref, ['component', 'authed']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return authed === true ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/signin', state: { from: props.location } } });
    }
  }));
}

function PublicRoute(_ref2) {
  var Component = _ref2.component,
      authed = _ref2.authed,
      rest = _objectWithoutProperties(_ref2, ['component', 'authed']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return authed === false ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' });
    }
  }));
}

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
      authed: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.removeListener = (0, _db.firebaseAuth)().onAuthStateChanged(function (user) {
        if (user) {
          _this2.setState({
            authed: true
          });
        } else {
          _this2.setState({
            authed: false
          });
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListener();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/' },
                  'Home'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
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
                    onClick: function onClick() {
                      (0, _PostItAuth.signOut)();
                    } },
                  ' Logout'
                ) : _react2.default.createElement(
                  'span',
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/signin' },
                    'Login'
                  ),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/signup' },
                    'Register'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Home2.default }),
                _react2.default.createElement(PublicRoute, { authed: this.state.authed, path: '/signin', component: _Login2.default }),
                _react2.default.createElement(PublicRoute, { authed: this.state.authed, path: '/signup', component: _Register2.default }),
                _react2.default.createElement(PrivateRoute, { authed: this.state.authed, path: '/dashboard', component: _Dashbord2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { render: function render() {
                    return _react2.default.createElement(
                      'h3',
                      null,
                      'No Match'
                    );
                  } })
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;