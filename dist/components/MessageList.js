'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _db = require('../../server/config/db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageList = function (_React$Component) {
   _inherits(MessageList, _React$Component);

   function MessageList() {
      _classCallCheck(this, MessageList);

      var _this = _possibleConstructorReturn(this, (MessageList.__proto__ || Object.getPrototypeOf(MessageList)).call(this));

      _this.state = {
         messages: {}
      };
      var fb = _firebase2.default.database();
      _this.fb = _firebase2.default.database();
      firebaseAuth().onAuthStateChanged(function (user) {
         uid = user.uid;
      });
      _this.fb.ref('users').child(uid).child('groups').child(groupId).on('child_added', function (msg) {

         if (_this.state.groups[msg.key]) {
            return;
         }
         var msgVal = msg.val();
         msgVal.key = msg.key;
         _this.state.groups[msgVal.key] = msgVal;
         _this.setState({ groups: _this.state.groups });

         var res = msg.val();
         console.log(res);
      });
      return _this;
   }

   _createClass(MessageList, [{
      key: 'render',
      value: function render() {
         var groupNodes = _lodash2.default.values(this.state.groups).map(function (group) {
            return _react2.default.createElement(
               'div',
               null,
               _react2.default.createElement(Group, { group: group }),
               _react2.default.createElement(GroupAdd, null)
            );
         });

         return _react2.default.createElement(
            'div',
            null,
            ' ',
            groupNodes
         );
      }
   }]);

   return MessageList;
}(_react2.default.Component);

exports.default = MessageList;