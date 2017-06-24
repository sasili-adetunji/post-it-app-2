'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoginStore = require('../stores/LoginStore.js');

var _LoginStore2 = _interopRequireDefault(_LoginStore);

var _PostItAuth = require('../actions/PostItAuth.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function setErrorMsg(error) {
  return {
    loginMessage: error
  };
}

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      loginMessage: null,
      email: '',
      password: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.googleLogin = _this.googleLogin.bind(_this);
    _this.reset = _this.reset.bind(_this);

    return _this;
  }

  _createClass(Login, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      (0, _PostItAuth.signIn)(this.state.email, this.state.password);
      console.log(this.state.email, this.state.password);
    }
  }, {
    key: 'googleLogin',
    value: function googleLogin(e) {
      e.preventDefault();
      (0, _PostItAuth.google)(this.state);
    }
  }, {
    key: 'reset',
    value: function reset(e) {
      e.preventDefault();
      (0, _PostItAuth.resetPassword)(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'form-group center' },
        _react2.default.createElement(
          'h1',
          null,
          'Login Page'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit, className: 'form-horizontal' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'email', className: 'control-label' },
              'Email address:'
            ),
            _react2.default.createElement('input', { onChange: this.handleChange, placeholder: 'Email', className: 'form-control' })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'password', className: 'control-label' },
              'Password: '
            ),
            _react2.default.createElement('input', { onChange: this.handleChange, className: 'form-control', type: 'password', placeholder: 'Password' })
          ),
          this.state.loginMessage && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('span', null),
            _react2.default.createElement(
              'span',
              null,
              'Error:'
            ),
            '\xA0',
            this.state.loginMessage,
            ' ',
            _react2.default.createElement(
              'a',
              { href: '#', onClick: this.reset },
              'Forgot Password?'
            )
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-default' },
            'Login'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          ' ',
          _react2.default.createElement(
            'a',
            { href: '#', onClick: this.googleLogin },
            'Log in with Google'
          ),
          ' '
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;