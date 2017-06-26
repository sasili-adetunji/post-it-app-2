'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

var _MessageBox = require('../MessageBox.js');

var _MessageBox2 = _interopRequireDefault(_MessageBox);

var _GroupList = require('../GroupList');

var _GroupList2 = _interopRequireDefault(_GroupList);

var _MessageList = require('../MessageList');

var _MessageList2 = _interopRequireDefault(_MessageList);

var _GroupAdd = require('../GroupAdd');

var _GroupAdd2 = _interopRequireDefault(_GroupAdd);

var _FilteredList = require('../FilteredList');

var _FilteredList2 = _interopRequireDefault(_FilteredList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import MessageList from '../MessageList.js';
// import ChannelList from '../ChannelList.js';

// import MessageStore from '../../stores/MessageStore';


var Menu = _materialUi2.default.Menu,
    MenuItem = _materialUi2.default.MenuItem,
    Paper = _materialUi2.default.Paper;


var style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          Paper,
          { style: style },
          _react2.default.createElement(
            Menu,
            null,
            _react2.default.createElement(MenuItem, { primaryText: 'Maps' }),
            _react2.default.createElement(MenuItem, { primaryText: 'Books' }),
            _react2.default.createElement(MenuItem, { primaryText: 'Flights' }),
            _react2.default.createElement(MenuItem, { primaryText: 'Apps' })
          )
        ),
        _react2.default.createElement(
          Paper,
          { style: style },
          _react2.default.createElement(
            Menu,
            null,
            _react2.default.createElement(MenuItem, { primaryText: 'Refresh' }),
            _react2.default.createElement(MenuItem, { primaryText: 'Help & feedback' }),
            _react2.default.createElement(MenuItem, { primaryText: 'Settings' }),
            _react2.default.createElement(MenuItem, { primaryText: 'Sign out' })
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

exports.default = Dashboard;