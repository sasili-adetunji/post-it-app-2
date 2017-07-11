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

var GroupAdd = function (_React$Component) {
  _inherits(GroupAdd, _React$Component);

  function GroupAdd(props) {
    _classCallCheck(this, GroupAdd);

    var _this = _possibleConstructorReturn(this, (GroupAdd.__proto__ || Object.getPrototypeOf(GroupAdd)).call(this, props));

    _this.state = {
      groupName: ''
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(GroupAdd, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();

      _actions2.default.groupAdd({
        groupname: this.state.groupname
      });
      console.log('A new Group: ', this.state.groupname, 'has been created');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Card,
        { style: {
            flexGrow: 1,
            marginLeft: 15,
            paddingTop: 20,
            paddingBottom: 20,
            display: 'block',
            width: '20%'
          } },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            ' Create Group '
          ),
          ' '
        ),
        _react2.default.createElement(TextField, { name: 'groupname', onChange: this.onChange, value: this.state.groupname,
          floatingLabelText: 'Group Name' }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(RaisedButton, { style: {
            display: 'block',
            width: '20px'
          }, onClick: this.onClick,
          label: 'Create Group ', primary: true })
      );
    }
  }]);

  return GroupAdd;
}(_react2.default.Component);

exports.default = GroupAdd;