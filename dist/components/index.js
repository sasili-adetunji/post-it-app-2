'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

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

var _PostItStore = require('../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _PostItActions = require('../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _Register = require('./Register');

var _Register2 = _interopRequireDefault(_Register);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

var _Dashbord = require('./protected/Dashbord');

var _Dashbord2 = _interopRequireDefault(_Dashbord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

(0, _reactTapEventPlugin2.default)();

/**
 * function that returns route then
 * @param {any} { component: Component, isAuthenticated, ...rest }
 * @returns {void}
 */
function PrivateRoute(_ref) {
  var Component = _ref.component,
      isAuthenticated = _ref.isAuthenticated,
      rest = _objectWithoutProperties(_ref, ['component', 'isAuthenticated']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return isAuthenticated === true ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/signin', state: { from: props.location } } });
    }
  }));
}
/**
 *
 * @param {any} { component: Component, isAuthenticated, ...rest }
 * @returns {void}
 */
function PublicRoute(_ref2) {
  var Component = _ref2.component,
      isAuthenticated = _ref2.isAuthenticated,
      rest = _objectWithoutProperties(_ref2, ['component', 'isAuthenticated']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return isAuthenticated === false ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/dashboard' });
    }
  }));
}

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      isAuthenticated: _PostItStore2.default.getIsAuthenticated(),
      user: _PostItStore2.default.getLoggedInUser(),
      errors: _PostItStore2.default.getErrors()
    };
    _this._onChange = _this._onChange.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }
  /**
   *  adds changeListener from the store
   *
   * @memberof App
   */


  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _PostItStore2.default.addChangeListener(this._onChange);

      // messaging.requestPermission().
      // then(function(){
      //   console.log('Have Permisssion')
      //   return messaging.getToken();
      // })
      // .then(function(token){
      //   console.log(token)
      // })
      // .catch(function(){
      //   console.log('Error Occured')
      // })
    }

    /**
     * removes change listener from the store
     *
     * @memberof App
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _PostItStore2.default.removeChangeListener(this._onChange);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      _PostItActions2.default.signOutUser();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _MuiThemeProvider2.default,
          { muiTheme: (0, _getMuiTheme2.default)(_darkBaseTheme2.default) },
          _react2.default.createElement(_AppBar2.default, {
            title: 'Post It App', iconElementRight: _react2.default.createElement(_FlatButton2.default, {
              label: 'Sign Out', onClick: this.handleClick }) })
        ),
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(PublicRoute, { path: '/', exact: true, component: _Login2.default }),
          _react2.default.createElement(PublicRoute, {
            isAuthenticated: this.state.isAuthenticated,
            path: '/signin', component: _Login2.default }),
          _react2.default.createElement(PublicRoute, {
            isAuthenticated: this.state.isAuthenticated,
            path: '/signup', component: _Register2.default }),
          _react2.default.createElement(PrivateRoute, {
            isAuthenticated: this.state.isAuthenticated,
            path: '/dashboard', component: _Dashbord2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { render: function render() {
              return _react2.default.createElement(
                'h3',
                null,
                'No Match'
              );
            } })
        )
      );
    }

    /**
     * monitors changes of the components
     *
     * @memberof App
     */

  }, {
    key: '_onChange',
    value: function _onChange() {
      this.setState({
        isAuthenticated: _PostItStore2.default.getIsAuthenticated(),
        user: _PostItStore2.default.getLoggedInUser(),
        errors: _PostItStore2.default.getErrors()
      });
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;