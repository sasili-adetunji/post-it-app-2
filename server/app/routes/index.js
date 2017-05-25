


const register = require('./register');
const login = require('./login');
const signout = require('./signout');
const group = require('./group');
const groupAdd = require('./groupAdd');




module.exports = function(app, db) {
  register(app, db);
  login(app, db);
  signout(app, db);
  group (app, db);
  groupAdd(app, db);

};