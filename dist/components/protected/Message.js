'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Api = require('../../Api');

var _Api2 = _interopRequireDefault(_Api);

var _PostItActions = require('../../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * createa Message components
 *
 * @class Message
 * @extends {React.Component}
 */
var Message = function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message(props) {
    _classCallCheck(this, Message);

    var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Message, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _Api2.default.getUserReadUsers(this.props.message);
      // PostItActions.getUserReadUsers(this.props.message);
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      // PostItActions.receiveReadUsers(this.props.message);
      _Api2.default.getUserReadUsers(this.props.message);
    }
  }, {
    key: 'render',
    value: function render() {
      var userNodes = this.props.readUser.map(function (eachUser, i) {
        var user = [];
        user.push(eachUser.userName);
        return _react2.default.createElement(
          'li',
          { style: { display: 'inline' }, key: i },
          ' ',
          user
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'panel-body msg_container_base' },
        _react2.default.createElement(
          'div',
          { className: 'row msg_container base_sent' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-10 col-xs-10' },
            _react2.default.createElement(
              'ul',
              { onClick: this.onClick },
              _react2.default.createElement(
                'div',
                { className: 'messages msg_sent' },
                _react2.default.createElement(
                  'p',
                  null,
                  ' ',
                  this.props.message.messageText,
                  ' '
                ),
                _react2.default.createElement(
                  'time',
                  null,
                  ' Posted by ',
                  this.props.message.author,
                  ' on',
                  this.props.message.date
                ),
                ' ',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'time',
                  null,
                  ' This message is ',
                  this.props.message.status,
                  ' '
                ),
                ' ',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'time',
                  null,
                  ' Read by ',
                  _react2.default.createElement(
                    'span',
                    null,
                    ' ',
                    userNodes,
                    ' '
                  ),
                  ' '
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Message;
}(_react2.default.Component);

exports.default = Message;