'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _trim = require('trim');

var _trim2 = _interopRequireDefault(_trim);

var _Card = require('material-ui/Card');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _PostItActions = require('../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  height: 100,
  width: 100,
  margin: '30px auto',
  padding: 30,
  textAlign: 'center',
  display: 'inline-block'
};

var AddMember = function (_React$Component) {
  _inherits(AddMember, _React$Component);

  function AddMember(props) {
    _classCallCheck(this, AddMember);

    var _this = _possibleConstructorReturn(this, (AddMember.__proto__ || Object.getPrototypeOf(AddMember)).call(this, props));

    _this.state = {
      groupname: '',
      userId: ''
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(AddMember, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();
      var user = {
        userId: this.state.userId,
        groupId: this.state.groupId
      };
      _PostItActions2.default.addUserToGroup(user);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(_Card.CardTitle, { title: 'Add' }),
        _react2.default.createElement(_TextField2.default, { name: 'groupId', onChange: this.onChange, value: this.state.groupId,
          floatingLabelText: 'Group ID' }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_TextField2.default, { name: 'userId', onChange: this.onChange, value: this.state.userId,
          floatingLabelText: 'User ID' }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_RaisedButton2.default, { style: {
            display: 'block',
            width: '20px'
          }, onClick: this.onClick,
          label: 'Add', primary: true })
      );
    }
  }]);

  return AddMember;
}(_react2.default.Component);

exports.default = AddMember;