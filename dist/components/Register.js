'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PostItAuth = require('../actions/PostItAuth.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function setErrorMsg(error) {
  return {
    registerError: error.message
  };
}

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.state = {
      registerError: null,
      username: '',
      email: '',
      password: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      (0, _PostItAuth.signUp)(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'form-group center' },
        _react2.default.createElement(
          'h1',
          null,
          'Signup Page'
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit, className: 'form-horizontal' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { 'for': 'email', className: 'control-label' },
              'Email address:'
            ),
            _react2.default.createElement('input', { onChange: this.handleChange, ref: function ref(email) {
                return _this2.email = email;
              }, placeholder: 'Email', className: 'form-control' })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { 'for': 'username', className: 'control-label' },
              'User Name:'
            ),
            _react2.default.createElement('input', { onChange: this.handleChange, className: 'form-control', ref: function ref(username) {
                return _this2.username = username;
              }, placeholder: 'Username' })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { 'for': 'password', className: 'control-label' },
              'Password: '
            ),
            _react2.default.createElement('input', { onChange: this.handleChange, className: 'form-control', type: 'password', placeholder: 'Password', ref: function ref(password) {
                return _this2.password = password;
              } })
          ),
          this.state.registerError && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('span', null),
            _react2.default.createElement(
              'span',
              null,
              'Error:'
            ),
            '\xA0',
            this.state.registerError
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit', className: 'btn btn-default' },
            'Signup'
          )
        )
      );
    }
  }]);

  return Register;
}(_react.Component);

exports.default = Register;