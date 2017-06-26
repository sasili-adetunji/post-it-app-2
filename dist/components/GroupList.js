'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _db = require('../../server/config/db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupList = function (_React$Component) {
  _inherits(GroupList, _React$Component);

  function GroupList(props) {
    _classCallCheck(this, GroupList);

    var _this = _possibleConstructorReturn(this, (GroupList.__proto__ || Object.getPrototypeOf(GroupList)).call(this, props));

    _this.state = {
      groups: {}
    };
    var fb = _firebase2.default.database();
    _this.fb = _firebase2.default.database();
    var uid = void 0,
        res = void 0,
        groupKey = void 0,
        grou = void 0;

    _this.fb.ref('users').child('jRN2zNHHDvTzs7muOnb5nnjbmwX2').child('groups').on('child_added', function (msg) {

      res = msg.key.then(fb.ref('groups').on('child_added', function (snap) {
        groupKey = snap.key;
        if (groupKey == res) return;
        grou = snap.val().groupName;

        //    this.state.groups[res] = re
        // this.setState({
        //    groups: this.state.groups
        // });
        console.log(res);
        // console.log(' GroupID: '+ res+ ', Group Name: '+ re.groupName+ ', Group Admin: '+ re.groupadmin);
        // console.log(resi, resil, resili);
      }));
    });
    return _this;
  }

  _createClass(GroupList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        ' '
      );
    }
  }]);

  return GroupList;
}(_react2.default.Component);

exports.default = GroupList;