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

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _PostItActions = require('../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var emails = [];
var userIds = [];

var style = {
  height: 100,
  width: 100,
  margin: '30px 30px',
  padding: 30,
  textAlign: 'center',
  display: 'inline-block'
};

var MessageBox = function (_React$Component) {
  _inherits(MessageBox, _React$Component);

  function MessageBox(props) {
    _classCallCheck(this, MessageBox);

    var _this = _possibleConstructorReturn(this, (MessageBox.__proto__ || Object.getPrototypeOf(MessageBox)).call(this, props));

    _this.state = {
      message: '',
      groupId: '',
      priorityLevel: ''
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
      var _this2 = this;

      e.preventDefault();
      var message = {
        message: this.state.message,
        groupId: this.state.groupId,
        priorityLevel: this.state.priorityLevel
      };

      //PostItActions.addMessage(message)
      //console.log(message)
      var groupRef = _firebase2.default.database().ref('groups/-Kpniq09QbqloaIMjgcY/messages').push().set({
        message: this.state.message
      });
      var userRef = _firebase2.default.database().ref('groups/-Kpniq09QbqloaIMjgcY/users/');
      userRef.orderByKey().once('value', function (snapshot) {
        snapshot.forEach(function (childSnapShot) {
          userIds.push(childSnapShot.val().Id);
          console.log('user Ids ', userIds);
        });
        userIds.forEach(function (uid) {

          var userRef2 = _firebase2.default.database().ref('users/' + uid + '/groups/-Kpniq09QbqloaIMjgcY/messages');
          userRef2.push().set({
            message: _this2.state.message
          });
          if (_this2.state.priorityLevel === "Critical" || _this2.state.priorityLevel === "Urgent") {
            var userEmailRef = _firebase2.default.database().ref('users/' + uid + '/').once('value', function (snap) {
              emails.push(snap.val().email);
              console.log('user Emails ', emails);

              emails.forEach(function (email) {
                var mail = email;
                console.log('EEEEEmails', mail);
              });
            });
          }
          if (_this2.state.priorityLevel === "Urgent") {
            console.log('this is strictly', _this2.state.priorityLevel);
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(_Card.CardTitle, { title: 'Message' }),
        _react2.default.createElement('textarea', { name: 'message',
          value: this.state.message,
          onChange: this.onChange,
          style: {
            width: '200px',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: '50px',
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
          } }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_TextField2.default, { style: {
              width: '200px',
              borderColor: '#D0D0D0',
              resize: 'none',
              borderRadius: 3,
              minHeight: '50px',
              color: '#555',
              fontSize: 14,
              outline: 'auto 0px'
            },
            name: 'groupId', onChange: this.onChange, value: this.state.groupId,
            floatingLabelText: 'Group ID' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'label',
            { htmlFor: 'priorityLevel' },
            'Priority Level:'
          ),
          _react2.default.createElement(
            'select',
            { style: {
                width: '200px',
                borderColor: '#D0D0D0',
                resize: 'none',
                borderRadius: 3,
                minHeight: '50px',
                color: '#555',
                fontSize: 14,
                outline: 'auto 0px'
              },
              placeholder: 'Priority Level', name: 'priorityLevel', onChange: this.onChange, value: this.state.priorityLevel, className: 'form-control' },
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
          )
        ),
        _react2.default.createElement(_RaisedButton2.default, { style: {
            display: 'block',
            width: '20px'
          }, onClick: this.onClick,
          label: 'Send ', primary: true
        })
      );
    }
  }]);

  return MessageBox;
}(_react2.default.Component);

exports.default = MessageBox;