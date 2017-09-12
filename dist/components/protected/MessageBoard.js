'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Api = require('../../Api');

var _Api2 = _interopRequireDefault(_Api);

var _PostItStore = require('../../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _GroupList = require('./GroupList');

var _GroupList2 = _interopRequireDefault(_GroupList);

var _UserList = require('./UserList');

var _UserList2 = _interopRequireDefault(_UserList);

var _MessageList = require('./MessageList');

var _MessageList2 = _interopRequireDefault(_MessageList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * creates dashboard components
 * 
 * @class Dashboard
 * @extends {React.Component}
 */
var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this.state = {
      loggedInUser: _PostItStore2.default.getLoggedInUser(),
      groups: _PostItStore2.default.getUserGroups(),
      messages: _PostItStore2.default.getMessages(),
      users: _PostItStore2.default.getUsersInGroup(),
      selectedGroup: _PostItStore2.default.getOpenedGroup(),
      user: _PostItStore2.default.getUsers(),
      readUsers: _PostItStore2.default.getReadUsers()

    };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Dashboard, [{
    key: 'onChange',
    value: function onChange() {
      this.setState({
        loggedInUser: _PostItStore2.default.getLoggedInUser(),
        groups: _PostItStore2.default.getUserGroups(),
        messages: _PostItStore2.default.getMessages(),
        users: _PostItStore2.default.getUsersInGroup(),
        selectedGroup: _PostItStore2.default.getOpenedGroup(),
        user: _PostItStore2.default.getUsers(),
        readUsers: _PostItStore2.default.getReadUsers()
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _Api2.default.getUserGroups();
      _Api2.default.getUsers();
      _PostItStore2.default.addChangeListener(this.onChange);
    }
  }, {
    key: 'componentUnmount',
    value: function componentUnmount() {
      _PostItStore2.default.removeChangeListener(this.onChange);
    }
  }, {
    key: 'render',
    value: function render() {
      /**
        * renders the dashboard componets
        *
        * @returns { void }
        * @memberof Dashboard
        */
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h5',
            null,
            ' Welcome ',
            this.state.loggedInUser.displayName,
            ' '
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-3' },
            _react2.default.createElement(_GroupList2.default, _extends({}, this.state, { loggedInUser: this.state.loggedInUser,
              groups: this.state.groups }))
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(_MessageList2.default, _extends({}, this.state, { loggedInUser: this.state.loggedInUser,
              readUsers: this.state.readUsers }))
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-3', id: '' },
            _react2.default.createElement(_UserList2.default, _extends({}, this.state, { user: this.state.users, usernames: this.state.user }))
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

exports.default = Dashboard;