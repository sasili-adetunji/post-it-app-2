'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _auth = require('./helpers/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Router from 'react-router';


function setErrorMsg(error) {
  return {
    groupMessage: error
  };
}

var addMembers = function (_Component) {
  _inherits(addMembers, _Component);

  function addMembers() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, addMembers);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = addMembers.__proto__ || Object.getPrototypeOf(addMembers)).call.apply(_ref, [this].concat(args))), _this), _this.state = { groupMessage: null }, _this.handleSubmit = function (e) {
      e.preventDefault();
      (0, _auth.addMember)(_this.userId.value).catch(function (error) {
        _this.setState(setErrorMsg('Error creating Group.'));
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(addMembers, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'center' },
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'div',
            null,
            ' ',
            _react2.default.createElement(
              'label',
              null,
              'Add Members'
            ),
            _react2.default.createElement('input', { ref: function ref(userId) {
                return _this2.userId = userId;
              }, placeholder: 'User Id' }),
            _react2.default.createElement(
              'div',
              null,
              ' '
            )
          ),
          this.state.error && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('span', null),
            _react2.default.createElement(
              'span',
              null,
              'Error:'
            ),
            '\xA0',
            this.state.error
          ),
          _react2.default.createElement(
            'div',
            null,
            ' ',
            _react2.default.createElement(
              'button',
              { type: 'submit' },
              'Add Members '
            ),
            ' '
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          ' '
        )
      );
    }
  }]);

  return addMembers;
}(_react.Component);

exports.default = addMembers;