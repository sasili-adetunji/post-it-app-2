'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _PostItStore = require('../../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _PostItActions = require('../../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * creates addmember components
 *
 * @class AddMember
 * @extends {React.Component}
 */
var AddMember = function (_React$Component) {
  _inherits(AddMember, _React$Component);

  function AddMember(props) {
    _classCallCheck(this, AddMember);

    var _this = _possibleConstructorReturn(this, (AddMember.__proto__ || Object.getPrototypeOf(AddMember)).call(this, props));

    _this.state = {
      userName: '',
      userId: '',
      error: ''
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.data = _this.data.bind(_this);
    return _this;
  }

  _createClass(AddMember, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }

    /**
     * function that get userid from username
     *
     * @param {any} userName
     * @returns
     * @memberof AddMember
     */

  }, {
    key: 'data',
    value: function data(userName) {
      var n = void 0;
      _lodash2.default.map(this.props.user).map(function (x) {
        if (userName === x.userName) {
          n = x.userId;
        } else {
          return null;
        }
      });
      return n;
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();
      var user = {
        userId: this.data(this.state.userName),
        userName: this.state.userName,
        groupId: this.props.groupId.groupId
      };
      if (!user.userId) {
        this.setState({
          error: 'This User does not exist',
          userName: ''
        });
      } else {
        this.setState({
          error: '',
          userName: ''
        });
        _PostItActions2.default.addUserToGroup(user);
      }
    }
    /**
     *
     * renders add member components
     * @returns { void }
     * @memberof AddMember
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'h6',
          null,
          ' To add a member, type in the username of the member '
        ),
        _react2.default.createElement(
          'form',
          { className: 'navbar-form', role: 'search' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement('input', {
              type: 'text', className: 'form-control', placeholder: 'Add member',
              name: 'userName', value: this.state.userName, onChange: this.onChange })
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.onClick, type: 'submit', className: 'btn btn-default ' },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-plus' })
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'span',
          { className: 'error' },
          ' ',
          this.state.error,
          ' '
        ),
        ' ',
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return AddMember;
}(_react2.default.Component);

exports.default = AddMember;