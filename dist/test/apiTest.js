'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_ENV = 'test';

var expect = _chai2.default.expect;

_chai2.default.use(_chaiHttp2.default);
var should = _chai2.default.should();

describe('PostIt', function () {
  it('allows anyone to visit its site', function (done) {
    _chai2.default.request(_server2.default).get('http:127.0.0.1:8000').end(function (err, res) {
      res.should.have.status(200);
      _assert2.default.equal(200, res.statusCode);
      done();
    });
  });
});