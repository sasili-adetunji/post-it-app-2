'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Register = require('../../client/components/Register');

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setup() {
  var props = {
    onlick: function onlick() {},
    onChange: function onChange() {}
  };

  return (0, _enzyme.mount)(_react2.default.createElement(_Register2.default, props));
}

describe('Signup  Test', function () {
  it('should take props', function () {
    var wrapper = setup();
    (0, _expect2.default)(wrapper.props().onChange).toExist;
    (0, _expect2.default)(wrapper.props().onlick).toExist;
  });
});