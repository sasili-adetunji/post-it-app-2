'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _trim = require('trim');

var _trim2 = _interopRequireDefault(_trim);

var _Card = require('material-ui/Card');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _CircularProgress = require('material-ui/CircularProgress');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _PostItActions = require('../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

var _PostItStore = require('../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_React$Component) {
  _inherits(UserList, _React$Component);

  function UserList(props) {
    _classCallCheck(this, UserList);

    var _this = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, props));

    _this.state = { users: null };
    return _this;
  }

  _createClass(UserList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      this.state.selectedUser = this.props.params.user;
      _PostItStore2.default.getRegisteredUser(this.state.selectedUser);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.selectedUser != nextProps.params.user) {

        this.state.selectedUser = nextProps.params.user;
        _PostItStore2.default.getRegisteredUser(this.state.selectedUser);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.users) {
        return _react2.default.createElement(
          Card,
          { style: {
              flexGrow: 1
            } },
          _react2.default.createElement(_CircularProgress.CircularProgress, {
            mode: 'indeterminate',
            style: {
              paddingTop: '20px',
              paddingBottom: '20px',
              margin: '0 auto',
              display: 'block',
              width: '60px'
            }
          })
        );
      }

      var userNodes = this.props.users.map(function (k, i) {
        var user = _this2.props.users[k];
        return _react2.default.createElement(_User2.default, { user: user, key: i });
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _List.List,
          null,
          _react2.default.createElement(_Card.CardTitle, { title: 'User List' }),
          userNodes
        )
      );
    }
  }]);

  return UserList;
}(_react2.default.Component);

exports.default = UserList;