'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Group = require('./Group.js');

var _Group2 = _interopRequireDefault(_Group);

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

var _connectToStores = require('alt/utils/connectToStores');

var _connectToStores2 = _interopRequireDefault(_connectToStores);

var _ChatStores = require('../stores/ChatStores');

var _ChatStores2 = _interopRequireDefault(_ChatStores);

var _GroupSource = require('../sources/GroupSource');

var _GroupSource2 = _interopRequireDefault(_GroupSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = _materialUi2.default.Card,
    List = _materialUi2.default.List,
    CircularProgress = _materialUi2.default.CircularProgress,
    Subheader = _materialUi2.default.Subheader;

var GroupList = (0, _connectToStores2.default)(_class = function (_React$Component) {
  _inherits(GroupList, _React$Component);

  function GroupList(props) {
    _classCallCheck(this, GroupList);

    var _this = _possibleConstructorReturn(this, (GroupList.__proto__ || Object.getPrototypeOf(GroupList)).call(this, props));

    _this.state = { groups: null };
    return _this;
  }

  _createClass(GroupList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.state.selectedGroup = this.props.params.group;
      _ChatStores2.default.getGroups(this.state.selectedGroup);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.selectedGroup != nextProps.params.group) {
        this.state.selectedGroup = nextProps.params.group;
        _ChatStores2.default.getGroups(this.state.selectedGroup);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.groups) {
        return _react2.default.createElement(
          Card,
          { style: {
              flexGrow: 1
            } },
          _react2.default.createElement(CircularProgress, {
            mode: 'indeterminate',
            style: {
              paddingTop: '20px',
              paddingBottom: '20px',
              margin: '0 auto',
              display: 'block',
              width: '30%'
            } })
        );
      }

      var groupNodes = _(this.props.groups).keys().map(function (k, i) {
        var group = _this2.props.groups[k];
        return _react2.default.createElement(_Group2.default, { group: group, key: i });
      }).value();

      return _react2.default.createElement(
        Card,
        { style: {
            flexGrow: 1
          } },
        _react2.default.createElement(
          List,
          null,
          _react2.default.createElement(
            'h4',
            null,
            ' My Groups '
          ),
          groupNodes
        )
      );
    }
  }], [{
    key: 'getStores',
    value: function getStores() {
      return [_ChatStores2.default];
    }
  }, {
    key: 'getPropsFromStores',
    value: function getPropsFromStores() {
      return _ChatStores2.default.getState();
    }
  }]);

  return GroupList;
}(_react2.default.Component)) || _class;

exports.default = GroupList;