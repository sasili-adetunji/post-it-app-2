'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseStore2 = require('./BaseStore');

var _BaseStore3 = _interopRequireDefault(_BaseStore2);

var _PostItConstants = require('../constants/PostItConstants.js');

var _PostItDispatcher = require('../dispatchers/PostItDispatcher');

var _PostItDispatcher2 = _interopRequireDefault(_PostItDispatcher);

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageStore = function (_BaseStore) {
  _inherits(MessageStore, _BaseStore);

  function MessageStore() {
    _classCallCheck(this, MessageStore);

    // First we register to the Dispatcher to listen for actions.
    // this.dispatchToken = PostItDispatcher.register(this._registerToActions.bind(this));
    var _this = _possibleConstructorReturn(this, (MessageStore.__proto__ || Object.getPrototypeOf(MessageStore)).call(this));

    _this._message = null;
    _this._jwt = null;
    _this._user = null;
    return _this;
  }

  _createClass(MessageStore, [{
    key: '_registerToActions',
    value: function _registerToActions(action) {
      switch (action.actionType) {
        case USER_SEND_MESSAGE:
          this._jwt = action.jwt;
          this._user = (0, _jwtDecode2.default)(this._jwt);
          this.emitChange();
          break;
        default:
          break;
      };
    }
  }, {
    key: 'isLoggedIn',
    value: function isLoggedIn() {
      return !!this._user;
    }
  }, {
    key: 'user',
    get: function get() {
      return this._user;
    }
  }, {
    key: 'jwt',
    get: function get() {
      return this._jwt;
    }
  }, {
    key: 'message',
    get: function get() {
      return this._message;
    }
  }]);

  return MessageStore;
}(_BaseStore3.default);

exports.default = new MessageStore();