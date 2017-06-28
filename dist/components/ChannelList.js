'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Channel = require('./Channel.js');

var _Channel2 = _interopRequireDefault(_Channel);

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

var _connectToStores = require('alt/utils/connectToStores');

var _connectToStores2 = _interopRequireDefault(_connectToStores);

var _ChatStores = require('../stores/ChatStores.js');

var _ChatStores2 = _interopRequireDefault(_ChatStores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = _materialUi2.default.Card,
    List = _materialUi2.default.List,
    CircularProgress = _materialUi2.default.CircularProgress;

var ChannelList = (0, _connectToStores2.default)(_class = function (_React$Component) {
  _inherits(ChannelList, _React$Component);

  function ChannelList(props) {
    _classCallCheck(this, ChannelList);

    var _this = _possibleConstructorReturn(this, (ChannelList.__proto__ || Object.getPrototypeOf(ChannelList)).call(this, props));

    _this.state = { channels: null };
    return _this;
  }

  _createClass(ChannelList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.state.selectedChannel = this.props.params.channel;
      _ChatStores2.default.getChannels(this.state.selectedChannel);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.selectedChannel != nextProps.params.channel) {
        this.state.selectedChannel = nextProps.params.channel;
        _ChatStores2.default.getChannels(this.state.selectedChannel);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.channels) {
        return _react2.default.createElement(
          Card,
          { style: {
              flexGrow: 1
            } },
          _react2.default.createElement(CircularProgress, {
            mode: 'indeterminate',
            style: {
              paddingTop: '20px',
              paddingBottom: '20px',
              margin: '0 auto',
              display: 'block',
              width: '60px'
            }
          })
        );
      }

      var channelNodes = _(this.props.channels).keys().map(function (k, i) {
        var channel = _this2.props.channels[k];
        return _react2.default.createElement(_Channel2.default, { channel: channel, key: i });
      }).value();

      return _react2.default.createElement(
        Card,
        { style: {
            flexGrow: 1
          } },
        _react2.default.createElement(
          List,
          null,
          channelNodes
        )
      );
    }
  }], [{
    key: 'getStores',
    value: function getStores() {
      return [_ChatStores2.default];
    }
  }, {
    key: 'getPropsFromStores',
    value: function getPropsFromStores() {
      return _ChatStores2.default.getState();
    }
  }]);

  return ChannelList;
}(_react2.default.Component)) || _class;

exports.default = ChannelList;