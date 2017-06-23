'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _trim = require('trim');

var _trim2 = _interopRequireDefault(_trim);

var _PostItAuth = require('../actions/PostItAuth.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupAdd = function (_React$Component) {
  _inherits(GroupAdd, _React$Component);

  function GroupAdd(props) {
    _classCallCheck(this, GroupAdd);

    var _this = _possibleConstructorReturn(this, (GroupAdd.__proto__ || Object.getPrototypeOf(GroupAdd)).call(this, props));

    _this.state = {
      groupName: ''
    };

    return _this;
  }

  _createClass(GroupAdd, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState({
        groupName: e.target.value
      });
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();
      this.setState({
        groupName: ''
      });
      (0, _PostItAuth.addGroup)(this.state.groupName);

      console.log('A new group has been created:', this.state.groupName);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: {
            width: '100%',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: 50,
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px' } },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { 'for': 'groupId' },
            'Group ID'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', { type: 'text', placeholder: 'Enter a group Name...', required: true,
              onChange: this.onChange.bind(this), value: this.state.groupName })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-primary btn-sm', onClick: this.onClick.bind(this) },
              'Create Group '
            )
          )
        )
      );
    }
  }]);

  return GroupAdd;
}(_react2.default.Component);

exports.default = GroupAdd;