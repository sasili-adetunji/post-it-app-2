'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _GridList = require('material-ui/GridList');

var _MessageBox = require('./MessageBox');

var _MessageBox2 = _interopRequireDefault(_MessageBox);

var _CreateGroup = require('./CreateGroup');

var _CreateGroup2 = _interopRequireDefault(_CreateGroup);

var _AddMember = require('./AddMember');

var _AddMember2 = _interopRequireDefault(_AddMember);

var _GroupList = require('./GroupList');

var _GroupList2 = _interopRequireDefault(_GroupList);

var _UserList = require('./UserList');

var _UserList2 = _interopRequireDefault(_UserList);

var _MessageList = require('./MessageList');

var _MessageList2 = _interopRequireDefault(_MessageList);

var _PostItStore = require('../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _Api = require('../Api');

var _Api2 = _interopRequireDefault(_Api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getAppState() {
  return {
    errors: _PostItStore2.default.getErrors(),
    success: _PostItStore2.default.getSuccess(),
    loggedInUser: _PostItStore2.default.getLoggedInUser(),
    registeredUser: _PostItStore2.default.getRegisteredUser(),
    groups: _PostItStore2.default.getUserGroups(),
    selectedGroup: _PostItStore2.default.getOpenedGroup(),
    users: _PostItStore2.default.getUsers(),
    messages: _PostItStore2.default.getMessages()

  };
}

var styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  body: {
    backgroundColor: '#edecec',
    display: 'flex',
    flex: 1,
    overflow: 'hidden'
  },
  content: {
    flex: 1,
    padding: '2em'
  }
};

var style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: 600,
    height: 500,
    overflowY: 'auto'
  }
};

var DashContainer = function (_React$Component) {
  _inherits(DashContainer, _React$Component);

  /**
   * Creates an instance of DashContainer.
   * @param {any} props 
   * @memberof DashContainer
   */
  function DashContainer(props) {
    _classCallCheck(this, DashContainer);

    var _this = _possibleConstructorReturn(this, (DashContainer.__proto__ || Object.getPrototypeOf(DashContainer)).call(this, props));

    _this.state = {
      errors: _PostItStore2.default.getErrors(),
      success: _PostItStore2.default.getSuccess(),
      loggedInUser: _PostItStore2.default.getLoggedInUser(),
      registeredUser: _PostItStore2.default.getRegisteredUser(),
      groups: _PostItStore2.default.getUserGroups(),
      selectedGroup: _PostItStore2.default.getOpenedGroup(),
      users: _PostItStore2.default.getUsers(),
      messages: _PostItStore2.default.getMessages()

    };
    return _this;
  }

  _createClass(DashContainer, [{
    key: '_onChange',
    value: function _onChange() {
      this.setState(getAppState());
    }

    /**
     * adds change listener, get users and usergroups from API
     * @memberof DashContainer
     */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _Api2.default.getUserGroups();
      _Api2.default.getUsers();

      _PostItStore2.default.addChangeListener(this._onChange.bind(this));
    }

    /**
     * removes changelistener
     * @memberof DashContainer
     */

  }, {
    key: 'componentUnmount',
    value: function componentUnmount() {
      _PostItStore2.default.removeChangeListener(this._onChange.bind(this));
    }

    /**
     * renders components view
     * @returns {void}
     * @memberof DashContainer
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'col-sm-4' },
          _react2.default.createElement(_UserList2.default, { users: this.state.users }),
          ' '
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-4' },
          _react2.default.createElement(_GroupList2.default, { groups: this.state.groups }),
          ' '
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-4' },
          _react2.default.createElement(_MessageList2.default, this.state),
          ' '
        )
      );
    }
  }]);

  return DashContainer;
}(_react2.default.Component);

exports.default = DashContainer;