'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _PostItStore = require('../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _PostItActions = require('../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

var _AddMember = require('./AddMember');

var _AddMember2 = _interopRequireDefault(_AddMember);

var _CreateGroup = require('./CreateGroup');

var _CreateGroup2 = _interopRequireDefault(_CreateGroup);

var _MessageBox = require('./MessageBox');

var _MessageBox2 = _interopRequireDefault(_MessageBox);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupList = function (_React$Component) {
  _inherits(GroupList, _React$Component);

  function GroupList(props) {
    _classCallCheck(this, GroupList);

    var _this = _possibleConstructorReturn(this, (GroupList.__proto__ || Object.getPrototypeOf(GroupList)).call(this, props));

    _this.state = {
      toggledAdd: false,
      showAdd: false,
      showCreate: false,
      showMessage: false,
      toggledCreate: false,
      toggledMessage: false
    };
    _this.handleToggleAdd = _this.handleToggleAdd.bind(_this);
    _this.handleToggleCreate = _this.handleToggleCreate.bind(_this);
    _this.handleToggleMessage = _this.handleToggleMessage.bind(_this);

    return _this;
  }

  _createClass(GroupList, [{
    key: 'handleToggleAdd',
    value: function handleToggleAdd() {
      this.setState({
        toggledAdd: !this.state.toggledAdd
      });
    }
  }, {
    key: 'handleToggleCreate',
    value: function handleToggleCreate() {
      this.setState({
        toggledCreate: !this.state.toggledCreate
      });
    }
  }, {
    key: 'handleToggleMessage',
    value: function handleToggleMessage() {
      this.setState({
        toggledMessage: !this.state.toggledMessage
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var groupNodes = this.props.groups.map(function (group, i) {
        return _react2.default.createElement(_Group2.default, { group: group, key: i });
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _List.List,
          null,
          _react2.default.createElement(_Card.CardTitle, { title: 'Group List' }),
          groupNodes
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'App Properties'
          ),
          _react2.default.createElement(_Toggle2.default, {
            name: 'addMember',
            label: 'Add Member',
            defaultToggled: this.state.toggledAdd,
            onToggle: this.handleToggleAdd
          }),
          _react2.default.createElement(_Toggle2.default, {
            name: 'createGroup',
            label: 'Create Group',
            defaultToggled: this.state.toggledCreate,
            onToggle: this.handleToggleCreate
          }),
          _react2.default.createElement(_Toggle2.default, {
            name: 'messageBox',
            label: 'Send Message',
            defaultToggled: this.state.toggledMessage,
            onToggle: this.handleToggleMessage
          }),
          this.state.toggledAdd ? this.state.showAdd = true : this.state.showAdd = false,
          this.state.showAdd ? _react2.default.createElement(_AddMember2.default, null) : '',
          this.state.toggledCreate ? this.state.showCreate = true : this.state.showCreate = false,
          this.state.showCreate ? _react2.default.createElement(_CreateGroup2.default, null) : '',
          this.state.toggledMessage ? this.state.showMessage = true : this.state.showMessage = false,
          this.state.showMessage ? _react2.default.createElement(_MessageBox2.default, null) : ''
        )
      );
    }
  }]);

  return GroupList;
}(_react2.default.Component);

exports.default = GroupList;