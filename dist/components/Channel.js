'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = _materialUi2.default.ListItem;

var Channel = function (_React$Component) {
  _inherits(Channel, _React$Component);

  function Channel(props) {
    _classCallCheck(this, Channel);

    return _possibleConstructorReturn(this, (Channel.__proto__ || Object.getPrototypeOf(Channel)).call(this, props));
  }

  _createClass(Channel, [{
    key: 'onClick',
    value: function onClick() {
      _actions2.default.channelOpened(this.props.channel);
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {};

      if (this.props.channel.selected) {
        style.backgroundColor = '#f0f0f0';
      }

      return _react2.default.createElement(
        ListItem,
        {
          href: '/#/chat/' + this.props.channel.key,
          style: style,
          key: this.props.channel.key
        },
        this.props.channel.name
      );
    }
  }]);

  return Channel;
}(_react2.default.Component);

exports.default = Channel;