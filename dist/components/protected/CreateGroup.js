'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PostItActions = require('../../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * create creategroup components
 *
 * @class CreateGroup
 * @extends {React.Component}
 */
var CreateGroup = function (_React$Component) {
  _inherits(CreateGroup, _React$Component);

  function CreateGroup(props) {
    _classCallCheck(this, CreateGroup);

    var _this = _possibleConstructorReturn(this, (CreateGroup.__proto__ || Object.getPrototypeOf(CreateGroup)).call(this, props));

    _this.state = {
      groupName: ''
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(CreateGroup, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState({
        groupName: e.target.value
      });
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();
      var group = {
        groupName: this.state.groupName,
        userName: this.props.userName.displayName
      };
      _PostItActions2.default.createGroup(group);
      this.setState({
        groupName: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'form',
          { className: 'navbar-form', role: 'search' },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement('input', {
              type: 'text', className: 'form-control', placeholder: 'Create Group',
              name: 'groupName', onChange: this.onChange, value: this.state.groupName })
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.onClick, type: 'submit', className: 'btn btn-default ' },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-plus' })
          )
        )
      );
    }
  }]);

  return CreateGroup;
}(_react2.default.Component);

exports.default = CreateGroup;