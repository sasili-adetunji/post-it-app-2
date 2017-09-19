'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _components = require('../../client/components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe(' Test for App Component', function () {
  it('renders the app components', function () {
    var components = (0, _enzyme.shallow)(_react2.default.createElement(_components2.default, { name: 'app' }));
    (0, _expect2.default)(components.instance().props.name).toBe('app');
  });
  it('renders the appbar components of the app', function () {
    var components = (0, _enzyme.shallow)(_react2.default.createElement(_components2.default, null));
    var appbar = components.find('AppBar');
    (0, _expect2.default)(appbar.props().title).toBe('Post It App');
  });
  it('renders the publicroute components of the app', function () {
    var components = (0, _enzyme.shallow)(_react2.default.createElement(_components2.default, null));
    var route = components.find('PublicRoute');
    (0, _expect2.default)(route.length).toEqual(3);
  });
  it('renders the privateroute components of the app', function () {
    var components = (0, _enzyme.shallow)(_react2.default.createElement(_components2.default, null));
    var route = components.find('PrivateRoute');
    (0, _expect2.default)(route.props().isAuthenticated).toBe(false);
    console.log(route.props().isAuthenticated);
  });
});