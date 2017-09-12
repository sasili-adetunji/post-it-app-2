'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

var _reactRouterDom = require('react-router-dom');

var _Card = require('material-ui/Card');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _PostItActions = require('../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

var _PostItStore = require('../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Creates Register components
 * @class Register
 * @extends {React.Component}
 */
var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  /**
   * Creates an instance of Register.
   * @param {object} props
   * @memberOf Register
   */
  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.state = {
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      isAuthenticated: _PostItStore2.default.getIsAuthenticated(),
      errors: _PostItStore2.default.getErrors()
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }
  /**
     * Monitors changes in the components and change the state
     * @param {object} e
     * @returns {void}
     * @memberOf Register
  */


  _createClass(Register, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
    /**
       * Makes an action call to register a user with email and password
       * @param {object} e
       * @returns {void}
       * @memberOf Register
    */

  }, {
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();
      var user = {
        email: this.state.email,
        password: this.state.password,
        userName: this.state.userName,
        phoneNumber: this.state.phoneNumber

      };
      _PostItActions2.default.registerUser(user);
    }
    /**
       * @returns {String} The HTML markup for the Login
       * @memberOf Login
    */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _MuiThemeProvider2.default,
          null,
          _react2.default.createElement(
            _Card.Card,
            { style: {
                maxWidth: '800px',
                margin: '30px auto',
                padding: '50px',
                textAlign: 'center'
              } },
            _react2.default.createElement(_Card.CardTitle, {
              style: { textAlign: 'center' },
              title: 'Signup Form',
              subtitle: 'To continue using PostIt, you need to register below' }),
            _react2.default.createElement(_TextField2.default, {
              name: 'username', onChange: this.onChange,
              value: this.state.userName, hintText: 'Username Field',
              floatingLabelText: 'Choose Username' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(_TextField2.default, {
              name: 'email', onChange: this.onChange, value: this.state.email, hintText: 'Email Field',
              floatingLabelText: 'Your Email' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(_TextField2.default, {
              name: 'password', onChange: this.onChange,
              value: this.state.password, hintText: 'Password Field',
              floatingLabelText: 'Choose Password', type: 'password' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(_TextField2.default, {
              name: 'phoneNumber', onChange: this.onChange,
              value: this.state.phoneNumber,
              hintText: 'E.g. 23480', floatingLabelText: 'Phone Number' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'span',
              { style: { color: 'red' } },
              ' ',
              _PostItStore2.default.getErrors(),
              ' '
            ),
            ' ',
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              ' Already Have an account,',
              _react2.default.createElement(
                'a',
                { href: '/#/signin' },
                ' Login here '
              ),
              ' '
            ),
            _react2.default.createElement(_RaisedButton2.default, {
              style: { display: 'block' }, onClick: this.onClick,
              onTouchTap: this.handleTouchTap,
              label: 'Sign Up', primary: true })
          )
        )
      );
    }
  }]);

  return Register;
}(_react2.default.Component);

exports.default = Register;