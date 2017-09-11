'use strict';

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  isAuthenticated: function isAuthenticated(req, res, next) {
    var user = _firebase2.default.auth().currentUser;
    if (user !== null) {
      req.user = user;
      next();
    } else {
      res.redirect('/login');
    }
  }
};