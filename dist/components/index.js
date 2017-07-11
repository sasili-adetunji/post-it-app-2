'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Routes = require('./Routes');

var _Routes2 = _interopRequireDefault(_Routes);

var _darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme');

var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Dashbord = require('./protected/Dashbord');

var _Dashbord2 = _interopRequireDefault(_Dashbord);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _Register = require('./Register');

var _Register2 = _interopRequireDefault(_Register);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _PostItStore = require('../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _PostItActions = require('../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactTapEventPlugin2.default)();

function getAppState() {
  return {
    errors: _PostItStore2.default.getErrors(),
    success: _PostItStore2.default.getSuccess(),
    loggedInUser: _PostItStore2.default.getLoggedInUser(),
    registeredUser: _PostItStore2.default.getRegisteredUser(),
    isAuthenticated: _PostItStore2.default.getIsAuthenticated()
  };
}

var App = (_temp = _class = function (_Component) {
  _inherits(App, _Component);

  _createClass(App, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return getAppState();
    }
  }]);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = getAppState();
    _this.handleClick = _this.handleClick.bind(_this);
    _this._onChange = _this._onChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: '_onChange',
    value: function _onChange() {
      this.setState(getAppState());
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _PostItStore2.default.addChangeListener(this._onChange);
    }
  }, {
    key: 'componentUnmount',
    value: function componentUnmount() {
      _PostItStore2.default.removeChangeListener(this._onChange);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();

      var signout = _PostItActions2.default.signOutUser();
      if (signout) {
        this.context.router.history.push('/signin');
      }
    }
  }, {
    key: 'render',
    value: function render() {

      console.log('Ret render auth:', this.state.isAuthenticated);

      var rightButtons = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_FlatButton2.default, { label: 'Sign Out', onClick: this.handleClick })
      );
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _MuiThemeProvider2.default,
          { muiTheme: (0, _getMuiTheme2.default)(_darkBaseTheme2.default) },
          _react2.default.createElement(_AppBar2.default, { title: 'Post It App', iconElementRight: rightButtons })
        ),
        this.state.isAuthenticated ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/signin' }),
        _react2.default.createElement(_Routes2.default, { auth: this.state.isAuthenticated })
      );
    }
  }]);

  return App;
}(_react.Component), _class.contextTypes = {
  router: _propTypes2.default.object
}, _temp);
exports.default = App;