'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Login = require('../../client/components/Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setup() {
  var props = {
    onClick: function onClick() {},
    onChange: function onChange() {},
    onClickReset: function onClickReset() {},
    onClickGoogle: function onClickGoogle() {}

  };

  return (0, _enzyme.mount)(_react2.default.createElement(_Login2.default, props));
}

describe('Login  Test', function () {
  it('should take props', function () {
    var wrapper = setup();
    (0, _expect2.default)(wrapper.props().onChange).toExist;
    (0, _expect2.default)(wrapper.props().onClick).toExist;
    (0, _expect2.default)(wrapper.props().onClickReset).toExist;
    (0, _expect2.default)(wrapper.props().onClickGoogle).toExist;
  });
});