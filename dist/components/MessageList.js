'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Message = require('./Message.js');

var _Message2 = _interopRequireDefault(_Message);

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _connectToStores = require('alt/utils/connectToStores');

var _connectToStores2 = _interopRequireDefault(_connectToStores);

var _ChatStores = require('../stores/ChatStores');

var _ChatStores2 = _interopRequireDefault(_ChatStores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = _materialUi2.default.Card,
    List = _materialUi2.default.List,
    CircularProgress = _materialUi2.default.CircularProgress;

var MessageList = (0, _connectToStores2.default)(_class = function (_React$Component) {
  _inherits(MessageList, _React$Component);

  function MessageList(props) {
    _classCallCheck(this, MessageList);

    return _possibleConstructorReturn(this, (MessageList.__proto__ || Object.getPrototypeOf(MessageList)).call(this, props));
  }

  _createClass(MessageList, [{
    key: 'render',
    value: function render() {
      var messageNodes = null;
      if (!this.props.messagesLoading) {
        messageNodes = _lodash2.default.values(this.props.messages).map(function (message, i) {
          return _react2.default.createElement(_Message2.default, { message: message, key: i });
        });
      } else {
        messageNodes = _react2.default.createElement(CircularProgress, { mode: 'indeterminate',
          style: {
            paddingTop: 20,
            paddingBottom: 20,
            margin: '0 auto',
            display: 'block',
            width: '50%'
          } });
      }
      return _react2.default.createElement(
        Card,
        { style: {
            flexGrow: 2,
            marginLeft: 30
          } },
        _react2.default.createElement(
          List,
          null,
          messageNodes
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

  return MessageList;
}(_react2.default.Component)) || _class;

exports.default = MessageList;