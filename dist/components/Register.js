'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = _materialUi2.default.Card,
    CardText = _materialUi2.default.CardText,
    TextField = _materialUi2.default.TextField,
    RaisedButton = _materialUi2.default.RaisedButton;
var Signup = (_temp = _class = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup(props) {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

    _this.state = {
      username: '',
      email: '',
      password: ''
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Signup, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'onClick',
    value: function onClick() {

      _actions2.default.signup({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        Card,
        { style: {
            'maxWidth': '800px',
            'margin': '30px auto',
            'padding': '50px',
            'textAlign': 'center'
          } },
        _react2.default.createElement(
          CardText,
          { style: {
              'textAlign': 'center'
            } },
          'To start chatting away, please Signup below.'
        ),
        _react2.default.createElement(TextField, { name: 'username', onChange: this.onChange, value: this.state.username,
          errorText: 'This field is required', hintText: 'Username Field', floatingLabelText: 'Choose Username' }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(TextField, { name: 'email', onChange: this.onChange, value: this.state.email,
          errorText: 'This field is required', hintText: 'Email Field', floatingLabelText: 'Your Email' }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(TextField, { name: 'password', onChange: this.onChange, value: this.state.password,
          errorText: 'This field is required', hintText: 'Password Field', floatingLabelText: 'Choose Password', type: 'password' }),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(RaisedButton, { style: {
            display: 'block'
          }, onClick: this.onClick,
          label: 'Sign Up', primary: true })
      );
    }
  }]);

  return Signup;
}(_react2.default.Component), _class.contextTypes = {
  router: _react2.default.PropTypes.func.isRequired
}, _temp);


module.exports = Signup;