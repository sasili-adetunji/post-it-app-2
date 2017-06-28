'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _trim = require('trim');

var _trim2 = _interopRequireDefault(_trim);

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = _materialUi2.default.Card,
    CardText = _materialUi2.default.CardText,
    TextField = _materialUi2.default.TextField,
    RaisedButton = _materialUi2.default.RaisedButton;

var MessageBox = function (_React$Component) {
  _inherits(MessageBox, _React$Component);

  function MessageBox(props) {
    _classCallCheck(this, MessageBox);

    var _this = _possibleConstructorReturn(this, (MessageBox.__proto__ || Object.getPrototypeOf(MessageBox)).call(this, props));

    _this.state = {
      message: '',
      groupId: ''
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(MessageBox, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();

      _actions2.default.sendMessage({
        message: this.state.message,
        groupId: this.state.groupId
      });
      console.log('A new Message: ', this.state.message, 'has been sent to the group', this.state.groupId);
      this.setState({
        message: '',
        groupId: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        Card,
        { style: {
            maxWidth: 1200,
            margin: '30px auto',
            padding: 30
          } },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            ' Send Message to Group '
          ),
          ' '
        ),
        _react2.default.createElement('textarea', { name: 'message',
          value: this.state.message,
          onChange: this.onChange,
          style: {
            width: '30%',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: 50,
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
          } }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(TextField, { name: 'groupId', onChange: this.onChange, value: this.state.groupId,
            floatingLabelText: 'Group ID' }),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(RaisedButton, { style: {
            display: 'block',
            width: '20px'
          }, onClick: this.onClick,
          label: 'Send ', primary: true })
      );
    }
  }]);

  return MessageBox;
}(_react2.default.Component);

exports.default = MessageBox;