'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _PostItActions = require('../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

var _PostItStore = require('../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userName = void 0;

var style = {
  height: 100,
  width: 100,
  margin: '30px auto',
  padding: 30,
  textAlign: 'center',
  display: 'inline-block'
};
/**
 * Addmember component.
 * @returns {String} The markup for the addMember component
 */

var AddMember = function (_React$Component) {
  _inherits(AddMember, _React$Component);

  /**
   * Creates an instance of AddMember.
   * @param {any} props
   * @memberof AddMembe
   */
  function AddMember(props) {
    _classCallCheck(this, AddMember);

    var _this = _possibleConstructorReturn(this, (AddMember.__proto__ || Object.getPrototypeOf(AddMember)).call(this, props));

    _this.state = {
      groupname: '',
      userId: '',
      users: _PostItStore2.default.getUsers()
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.userName = _this.userName.bind(_this);
    // this.makeUser = this.makeUser.bind(this);
    // this.users = this.users.bind(this);
    return _this;
  }

  /**
   * Monitors changes in the components and change the state
   * @param {any} e
   * @memberof AddMember
   */


  _createClass(AddMember, [{
    key: 'onChange',
    value: function onChange(e) {
      e.preventDefault();
      // this.setState({
      //   [e.target.name]: e.target.value
      // });
      var user = _lodash2.default.map(this.state.users).map(function (x) {
        console.log(x.username, '???????????');
        return x.username;
      });
    }

    /**
     * makes an action to add member
     *
     * @param {any} e
     * @memberof AddMember
     */

  }, {
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();
      var user = {
        userId: this.state.userId,
        groupId: this.state.groupId
      };
      _PostItActions2.default.addUserToGroup(user);
    }
  }, {
    key: 'userName',
    value: function userName() {
      console.log('xxxxxxx');
      var user = _lodash2.default.map(this.state.users).map(function (x) {
        console.log(x.username, '???????????');
        return x.username;
      });
    }
  }, {
    key: 'makeUser',
    value: function makeUser() {
      var _this2 = this;

      console.log('xxxxxxx');
      (function (X) {
        console.log(X, 'xxxxxxx');
        return _this2.userName.map(_react2.default.createElement(
          'option',
          null,
          ' ',
          X,
          ' '
        ));
      });
    }

    // users() {
    //   console.log(this.userName.map(this.makeUser), 'usssssssss');
    //   return this.userName.map(this.makeUser);
    // }


    /**
     * renders the addMember components
     *
     * @returns {void}
     * @memberof AddMember
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          ' Im here guys '
        ),
        _react2.default.createElement(
          'select',
          null,
          ' ',
          this.userName,
          ' '
        )
      );
    }
  }]);

  return AddMember;
}(_react2.default.Component);

//     return (

//       <div style={style}>
//         <CardTitle title="Add" />
//         <TextField
//           name="groupId" onChange={this.onChange} value={this.state.groupId}
//           floatingLabelText="Group ID" /><br />
//         {/* <TextField
//           name="userId" onChange={this.onChange} value={this.state.userId}
//           floatingLabelText="User ID" /><br /> */}
//         {/* <select onChange={this.onChange}>
//           <option value="user">{this.userName}</option>
//         </select> */}
//         <RaisedButton
//           style={{
//             display: 'block',
//             width: '20px'
//           }}
//           onClick={this.onClick}
//           label="Add" primary />
//       </div>
//     );
//   }

// }

exports.default = AddMember;