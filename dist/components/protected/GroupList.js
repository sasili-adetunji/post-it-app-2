'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CreateGroup = require('./CreateGroup');

var _CreateGroup2 = _interopRequireDefault(_CreateGroup);

var _PostItStore = require('../../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * cretes grouplist components
 *
 * @class GroupList
 * @extends {React.Component}
 */
var GroupList = function (_React$Component) {
  _inherits(GroupList, _React$Component);

  function GroupList() {
    _classCallCheck(this, GroupList);

    return _possibleConstructorReturn(this, (GroupList.__proto__ || Object.getPrototypeOf(GroupList)).apply(this, arguments));
  }

  _createClass(GroupList, [{
    key: 'render',
    value: function render() {
      var groupNodes = this.props.groups.map(function (group, i) {
        return _react2.default.createElement(_Group2.default, { group: group, key: i });
      });
      return _react2.default.createElement(
        'div',
        { className: '' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_CreateGroup2.default, { userName: this.props.loggedInUser })
        ),
        groupNodes
      );
    }
  }]);

  return GroupList;
}(_react2.default.Component);

exports.default = GroupList;