'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _MessageList = require('./MessageList');

var _MessageList2 = _interopRequireDefault(_MessageList);

var _PostItActions = require('../../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

var _PostItStore = require('../../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _AddMember = require('./AddMember');

var _AddMember2 = _interopRequireDefault(_AddMember);

var _Api = require('../../Api');

var _Api2 = _interopRequireDefault(_Api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * creates Group components
 *
 * @class Group
 * @extends {React.Component}
 */
var Group = function (_React$Component) {
  _inherits(Group, _React$Component);

  function Group(props) {
    _classCallCheck(this, Group);

    var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Group, [{
    key: 'onClick',
    value: function onClick() {
      _Api2.default.getMessages(this.props.group);
      _PostItActions2.default.groupOpened(this.props.group);
      _Api2.default.getUsersInGroup(this.props.group);
      _Api2.default.getUserGroups();
    }
    /**
     * renders group componenets
     *
     * @returns { void }
     * @memberof Group
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'side-menu-container' },
        _react2.default.createElement(
          'a',
          null,
          ' ',
          _react2.default.createElement(
            'li',
            { onClick: this.onClick },
            _react2.default.createElement(
              'b',
              null,
              ' ',
              this.props.group.groupName,
              ' '
            )
          ),
          ' '
        )
      );
    }
  }]);

  return Group;
}(_react2.default.Component);

exports.default = Group;