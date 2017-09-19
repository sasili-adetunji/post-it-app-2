'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PostItActions = require('../../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

var _PostItStore = require('../../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * creates messagebox components
 *
 * @class MessageBox
 * @extends {React.Component}
 */
var MessageBox = function (_React$Component) {
  _inherits(MessageBox, _React$Component);

  /**
   * Creates an instance of MessageBox.
   * @param {any} props
   * @memberof MessageBox
   */
  function MessageBox(props) {
    _classCallCheck(this, MessageBox);

    var _this = _possibleConstructorReturn(this, (MessageBox.__proto__ || Object.getPrototypeOf(MessageBox)).call(this, props));

    _this.state = {
      message: '',
      priorityLevel: ''
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  /**
   *
   * @param {any} e
   * @memberof MessageBox
   */


  _createClass(MessageBox, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }

    /**
     *
     *
     * @param {any} e
     * @memberof MessageBox
     */

  }, {
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();
      var message = {
        message: this.state.message,
        groupId: this.props.groupId.groupId,
        priorityLevel: this.state.priorityLevel,
        date: new Date().toJSON(),
        author: this.props.author.displayName
      };
      _PostItActions2.default.addMessage(message);
      this.setState({
        message: '',
        date: ''
      });
    }
    /**
     *
     * renders the messagebox components
     * @returns { void }
     * @memberof MessageBox
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'input-group' },
        _react2.default.createElement(
          'div',
          null,
          ' ',
          _react2.default.createElement(
            'h4',
            null,
            ' Send Message to Group '
          ),
          ' '
        ),
        _react2.default.createElement('textarea', {
          rows: '2', onChange: this.onChange, id: 'btn-input',
          type: 'text', className: 'form-control',
          placeholder: 'Write your message here...', name: 'message', value: this.state.message }),
        _react2.default.createElement('div', null),
        _react2.default.createElement(
          'select',
          {
            placeholder: 'Priority Level', name: 'priorityLevel', onChange: this.onChange,
            className: 'form-control', value: this.state.priorityLevel },
          _react2.default.createElement(
            'option',
            { value: 'Normal' },
            'Normal'
          ),
          _react2.default.createElement(
            'option',
            { value: 'Urgent' },
            'Urgent'
          ),
          _react2.default.createElement(
            'option',
            { value: 'Critical' },
            'Critical'
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'input-group-btn' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              { onClick: this.onClick, className: 'btn btn-primary btn-sm' },
              'Send'
            )
          )
        )
      );
    }
  }]);

  return MessageBox;
}(_react2.default.Component);

exports.default = MessageBox;