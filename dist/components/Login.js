'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

var _Card = require('material-ui/Card');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

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
 * Login component.
 * @returns {String} The HTML markup for the login component
 */

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  /**
   * Creates an instance of Login.
   * @param {object} props
   * @memberOf Login
   */
  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      email: '',
      password: '',
      isAuthenticated: _PostItStore2.default.getIsAuthenticated(),
      errors: _PostItStore2.default.getErrors()
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.onClickGoogle = _this.onClickGoogle.bind(_this);
    _this.onClickReset = _this.onClickReset.bind(_this);
    return _this;
  }
  /**
     * Monitors changes in the components and change the state
     * @param {object} e
     * @returns {void}
     * @memberOf Login
  */


  _createClass(Login, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }

    /**
       * Makes an action call to log a user with email and password
       * @param {object} e
       * @returns {void}
       * @memberOf Login
    */

  }, {
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();
      var user = {
        email: this.state.email,
        password: this.state.password
      };
      _PostItActions2.default.login(user);
    }
    /**
       * Makes an action call to log a user with google
       * @param {object} e
       * @returns {void}
       * @memberOf Login
    */

  }, {
    key: 'onClickGoogle',
    value: function onClickGoogle(e) {
      e.preventDefault();
      _PostItActions2.default.googleLogin();
    }
    /**
       * Makes an action call to reset password
       * @param {object} e
       * @returns {void}
       * @memberOf Login
    */

  }, {
    key: 'onClickReset',
    value: function onClickReset(e) {
      e.preventDefault();
      var email = {
        email: this.state.email
      };
      _PostItActions2.default.resetPassword(email);
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
              title: 'Login Form',
              subtitle: 'To continue using PostIt, you need to login below' }),
            _react2.default.createElement(_TextField2.default, {
              name: 'email', onChange: this.onChange, value: this.state.email,
              errorText: this.state.errors, hintText: 'Email Field',
              floatingLabelText: 'Your Email' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(_TextField2.default, {
              name: 'password', onChange: this.onChange, value: this.state.password,
              errorText: this.state.errors, hintText: 'Password Field',
              floatingLabelText: 'Choose Password', type: 'password' }),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              ' Dont Have an account, ',
              _react2.default.createElement(
                'a',
                { href: '/#/signup' },
                ' Register here '
              ),
              ' '
            ),
            _react2.default.createElement(
              'p',
              null,
              ' Forgot your Password? Enter your Email and ',
              _react2.default.createElement(
                'a',
                { href: '/#/signup',
                  onClick: this.onClickReset },
                ' Click here '
              ),
              ' '
            ),
            _react2.default.createElement(_RaisedButton2.default, {
              style: {
                display: 'block'
              },
              label: 'Login', primary: true, onClick: this.onClick }),
            _react2.default.createElement('div', null),
            _react2.default.createElement(_FlatButton2.default, {
              style: {
                width: '50%',
                margin: '0 auto',
                border: '2px solid',
                backgroundColor: '#ffd699'
              },
              label: 'Sign in with Google', primary: true, onClick: this.onClickGoogle
            })
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = Login;