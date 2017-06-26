'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2;

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _decorators = require('alt/utils/decorators');

var _ChannelSource = require('../sources/ChannelSource');

var _ChannelSource2 = _interopRequireDefault(_ChannelSource);

var _MessageSource = require('../sources/MessageSource');

var _MessageSource2 = _interopRequireDefault(_MessageSource);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var ChatStore = (_dec = (0, _decorators.datasource)(_ChannelSource2.default, _MessageSource2.default), _dec2 = (0, _decorators.decorate)(_alt2.default), _dec3 = (0, _decorators.bind)(_actions2.default.messagesLoading), _dec4 = (0, _decorators.bind)(_actions2.default.messagesReceived), _dec5 = (0, _decorators.bind)(_actions2.default.sendMessage), _dec6 = (0, _decorators.bind)(_actions2.default.messageReceived), _dec7 = (0, _decorators.bind)(_actions2.default.channelOpened), _dec8 = (0, _decorators.bind)(_actions2.default.channelsReceived), _dec9 = (0, _decorators.bind)(_actions2.default.login), _dec(_class = _dec2(_class = (_class2 = function () {
  function ChatStore() {
    _classCallCheck(this, ChatStore);

    this.state = {
      user: null,
      messages: null,
      messagesLoading: true
    };
  }

  _createClass(ChatStore, [{
    key: 'messagesLoading',
    value: function messagesLoading() {
      this.setState({
        messagesLoading: true
      });
    }
  }, {
    key: 'receivedMessages',
    value: function receivedMessages(messages) {
      (0, _lodash2.default)(messages).keys().each(function (k) {
        messages[k].key = k;
      }).value();

      this.setState({
        messages: messages,
        messagesLoading: false
      });
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage(message) {
      this.state.message = message;
      setTimeout(this.getInstance().sendMessage, 10);
    }
  }, {
    key: 'messageReceived',
    value: function messageReceived(msg) {
      if (this.state.messages[msg.key]) {
        return;
      }

      this.state.messages[msg.key] = msg;

      this.setState({
        messages: this.state.messages
      });
    }
  }, {
    key: 'channelOpened',
    value: function channelOpened(selectedChannel) {
      (0, _lodash2.default)(this.state.channels).values().each(function (channel) {
        channel.selected = false;
      }).value();

      selectedChannel.selected = true;

      this.setState({
        selectedChannel: selectedChannel,
        channels: this.state.channels,
        messagesDirty: true
      });

      setTimeout(this.getInstance().getMessages, 100);
    }
  }, {
    key: 'receivedChannels',
    value: function receivedChannels(channels) {
      var selectedChannel = void 0;
      (0, _lodash2.default)(channels).keys().each(function (key, index) {
        channels[key].key = key;
        if (channels[key].selected) {
          selectedChannel = channels[key];
        }
      }).value();

      this.setState({
        channels: channels,
        selectedChannel: selectedChannel,
        messagesDirty: true
      });

      setTimeout(this.getInstance().getMessages, 100);
    }
  }, {
    key: 'login',
    value: function login(user) {
      this.setState({ user: user });
    }
  }]);

  return ChatStore;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'messagesLoading', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'messagesLoading'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'receivedMessages', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'receivedMessages'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'sendMessage', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'sendMessage'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'messageReceived', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'messageReceived'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'channelOpened', [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, 'channelOpened'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'receivedChannels', [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, 'receivedChannels'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'login', [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, 'login'), _class2.prototype)), _class2)) || _class) || _class);
exports.default = _alt2.default.createStore(ChatStore);