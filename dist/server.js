'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _db = require('./config/db');

var _db2 = _interopRequireDefault(_db);

var _index = require('./app/routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// server file

var app = (0, _express2.default)();

var port = process.env.PORT || 8000;

// use body parser to allow parsing of incoming request bodies 
//available under the req.body property.

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

// import the index file which has all the routes

(0, _index2.default)(app, {});

app.listen(port, function () {
	console.log('You are listening on ' + port);
});