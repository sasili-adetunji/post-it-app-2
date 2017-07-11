'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

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

var _PostItActions = require('../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

var _PostItStore = require('../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _reactRouterDom = require('react-router-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

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

var Login = (_temp = _class = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      email: '',
      password: '',
      loginMessage: null,
      isAuthenticated: _PostItStore2.default.getIsAuthenticated()
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.onClickGoogle = _this.onClickGoogle.bind(_this);
    _this.onClickReset = _this.onClickReset.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'onClick',
    value: function onClick() {

      var user = {
        email: this.state.email,
        password: this.state.password
      };
      _PostItActions2.default.login(user);
      _PostItActions2.default.receiveAuthenticatedUser(user);

      this.context.router.history.push('/dashboard');
    }
  }, {
    key: 'onClickGoogle',
    value: function onClickGoogle() {
      Actions.googleLogin(this.context.router);
    }
  }, {
    key: 'onClickReset',
    value: function onClickReset() {
      var _this2 = this;

      Actions.reset({ email: this.state.email
      }).then(function () {
        return _this2.setState(setErrorMsg('Password reset email sent to ' + _this2.email.value + '.'));
      }).catch(function (error) {
        return _this2.setState(setErrorMsg('Email address not found.'));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isAuthenticated == true) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' });
      } else {

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _MuiThemeProvider2.default,
            null,
            _react2.default.createElement(
              _Card.Card,
              { style: {
                  'maxWidth': '800px',
                  'margin': '30px auto',
                  'padding': '50px',
                  'textAlign': 'center'
                } },
              _react2.default.createElement(_Card.CardTitle, { style: { 'textAlign': 'center' },
                title: 'Login Form',
                subtitle: 'To continue using PostIt, you need to login below' }),
              _react2.default.createElement(_TextField2.default, { name: 'email', onChange: this.onChange, value: this.state.email,
                errorText: 'This field is required', hintText: 'Email Field', floatingLabelText: 'Your Email' }),
              _react2.default.createElement('br', null),
              _react2.default.createElement(_TextField2.default, { name: 'password', onChange: this.onChange, value: this.state.password,
                errorText: 'This field is required', hintText: 'Password Field', floatingLabelText: 'Choose Password', type: 'password' }),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
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
                  { href: '#', onClick: this.onClickReset },
                  'Forgot Password?'
                )
              ),
              _react2.default.createElement(
                'p',
                null,
                ' Dont Have an account,',
                _react2.default.createElement(
                  'a',
                  { href: '/#/signup' },
                  ' Register here '
                ),
                ' '
              ),
              _react2.default.createElement(_RaisedButton2.default, { style: {
                  display: 'block'
                },
                label: 'Login', primary: true, onClick: this.onClick }),
              _react2.default.createElement('div', null),
              _react2.default.createElement(_FlatButton2.default, { style: {
                  width: '50%',
                  margin: '0 auto',
                  border: '2px solid',
                  backgroundColor: '#ffd699'
                }, label: 'Sign in with Google', primary: true, onClick: this.onClickGoogle })
            )
          )
        );
      }
    }
  }]);

  return Login;
}(_react2.default.Component), _class.contextTypes = {
  router: _propTypes2.default.object
}, _temp);

module.exports = Login;