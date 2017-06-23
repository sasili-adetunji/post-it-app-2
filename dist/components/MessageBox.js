'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _trim = require('trim');

var _trim2 = _interopRequireDefault(_trim);

var _MessageStore = require('../stores/MessageStore.js');

var _MessageStore2 = _interopRequireDefault(_MessageStore);

var _PostItAuth = require('../actions/PostItAuth.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function setErrorMsg(error) {
  return {
    messageError: error
  };
}

var MessageBox = function (_React$Component) {
  _inherits(MessageBox, _React$Component);

  function MessageBox(props) {
    _classCallCheck(this, MessageBox);

    var _this = _possibleConstructorReturn(this, (MessageBox.__proto__ || Object.getPrototypeOf(MessageBox)).call(this, props));

    _this.state = {
      messageBody: '',
      groupId: ''
    };

    return _this;
  }

  _createClass(MessageBox, [{
    key: 'onChangeMessage',
    value: function onChangeMessage(e) {
      this.setState({
        messageBody: e.target.value
      });
    }
  }, {
    key: 'onChangeGroup',
    value: function onChangeGroup(e) {
      this.setState({
        groupId: e.target.value
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.setState({
        messageBody: '',
        groupId: ''
      });
      (0, _PostItAuth.message)(this.messageBody.value, this.groupId.value);
      console.log('A new Message: ', this.state.messageBody, 'has been sent to the group', this.state.groupId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { style: {
            maxWidth: 1200,
            margin: '30px auto',
            padding: 30
          } },
        _react2.default.createElement(
          'div',
          { style: {
              width: '100%',
              borderColor: '#D0D0D0',
              resize: 'none',
              borderRadius: 3,
              minHeight: 50,
              color: '#555',
              fontSize: 14,
              outline: 'auto 0px'
            } },
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { 'for': 'message' },
                'Message'
              ),
              _react2.default.createElement('textarea', { className: 'form-control', rows: '5', id: 'message',
                type: 'text', placeholder: 'Write a message...', required: true,
                ref: function ref(messageBody) {
                  return _this2.messageBody = messageBody;
                }, onChange: this.onChangeMessage.bind(this) })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { 'for': 'groupId' },
                'Group ID'
              ),
              _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'groupId',
                placeholder: 'Enter the group Id... required ',
                ref: function ref(groupId) {
                  return _this2.groupId = groupId;
                },
                onChange: this.onChangeGroup.bind(this) })
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-primary btn-sm' },
              'Send '
            )
          )
        )
      );
    }
  }]);

  return MessageBox;
}(_react2.default.Component);

exports.default = MessageBox;