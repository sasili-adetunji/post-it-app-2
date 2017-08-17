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

var _List = require('material-ui/List');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

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

var _PostItStore = require('../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Grouplist component with createGroup,MessageBox and AddMember component
 *
 * @class GroupList
 * @extends {React.Component}
 */
var GroupList = function (_React$Component) {
  _inherits(GroupList, _React$Component);

  /**
   * Creates an instance of GroupList.
   * @param {any} props
   * @memberof GroupList
   */
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
    return _this;
  }

  /**
   * controls the toggle of addMember components
   *
   * @memberof GroupList
   */


  _createClass(GroupList, [{
    key: 'handleToggleAdd',
    value: function handleToggleAdd() {
      this.setState({
        toggledAdd: !this.state.toggledAdd
      });
    }

    /**
     * controls the toggle for creatMember components
     *
     * @memberof GroupList
     */

  }, {
    key: 'handleToggleCreate',
    value: function handleToggleCreate() {
      this.setState({
        toggledCreate: !this.state.toggledCreate
      });
    }

    /**
     * The markup for the groupList components
     *
     * @returns {void}
     * @memberof GroupList
     */

  }, {
    key: 'render',
    value: function render() {
      var groupNodes = this.props.groups.map(function (group, i) {
        return _react2.default.createElement(_Group2.default, { group: group, key: i });
      });
      return _react2.default.createElement(
        'div',
        { className: 'bottomMargin' },
        _react2.default.createElement(
          _MuiThemeProvider2.default,
          null,
          _react2.default.createElement(
            _Card.Card,
            null,
            _react2.default.createElement(
              _List.List,
              null,
              _react2.default.createElement(_Card.CardTitle, { title: 'My Groups' }),
              groupNodes
            ),
            _react2.default.createElement(_Toggle2.default, {
              name: 'createGroup',
              label: 'Create Group',
              defaultToggled: this.state.toggledCreate,
              onToggle: this.handleToggleCreate
            }),
            _react2.default.createElement(_Toggle2.default, {
              name: 'addMember',
              label: 'Add Member',
              defaultToggled: this.state.toggledAdd,
              onToggle: this.handleToggleAdd
            }),
            this.state.toggledAdd ? this.state.showAdd = true : this.state.showAdd = false,
            this.state.showAdd ? _react2.default.createElement(_AddMember2.default, null) : '',
            this.state.toggledCreate ? this.state.showCreate = true : this.state.showCreate = false,
            this.state.showCreate ? _react2.default.createElement(_CreateGroup2.default, null) : ''
          )
        ),
        _react2.default.createElement('div', null)
      );
    }
  }]);

  return GroupList;
}(_react2.default.Component);

exports.default = GroupList;