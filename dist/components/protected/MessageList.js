'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MessageBox = require('./MessageBox');

var _MessageBox2 = _interopRequireDefault(_MessageBox);

var _Api = require('../../Api');

var _Api2 = _interopRequireDefault(_Api);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * creates a messagelist components
 *
 * @class MessageList
 * @extends {React.Component}
 */
var MessageList = function (_React$Component) {
  _inherits(MessageList, _React$Component);

  function MessageList() {
    _classCallCheck(this, MessageList);

    return _possibleConstructorReturn(this, (MessageList.__proto__ || Object.getPrototypeOf(MessageList)).apply(this, arguments));
  }

  _createClass(MessageList, [{
    key: 'render',

    /**
     *
     * renders messagelist components
     * @returns { void }
     * @memberof MessageList
     */
    value: function render() {
      var _this2 = this;

      var messageNodes = null;
      if (this.props.selectedGroup.length === 0) {
        messageNodes = _react2.default.createElement(
          'h4',
          null,
          ' No Group Selected '
        );
      } else if (this.props.messages.length === 0) {
        messageNodes = _react2.default.createElement(
          'h4',
          null,
          ' No Message in Group '
        );
      } else {
        messageNodes = this.props.messages.map(function (message, i) {
          return _react2.default.createElement(_Message2.default, {
            message: message, key: i, MessageId: _this2.props.messages[0],
            readUser: _this2.props.readUsers });
        });
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: ' top-bar' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-8 col-xs-8' },
            _react2.default.createElement(
              'h4',
              null,
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-comment' }),
              ' '
            )
          )
        ),
        messageNodes,
        _react2.default.createElement('div', null),
        _react2.default.createElement(_MessageBox2.default, { groupId: this.props.selectedGroup[0], author: this.props.loggedInUser })
      );
    }
  }]);

  return MessageList;
}(_react2.default.Component);

exports.default = MessageList;