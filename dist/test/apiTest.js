'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_ENV = 'test';

var should = _chai2.default.should();
var expect = _chai2.default.expect;
_chai2.default.use(_chaiHttp2.default);

var user = {
  userName: 'Goodboy',
  password: 'googleoo',
  email: 'goodboy@gmail.com',
  phoneNumber: '08021256793'
};
var newUser = {
  userName: 'Goodgirl',
  password: 'google123',
  email: 'goodgirl@gmail.com',
  phoneNumber: '08021256793'
};
var SignIn = {
  email: 'goodboy@gmail.com',
  password: 'googleoo'
};

var group = {
  groupName: 'Business tips'
};

describe('PostIt Signup route', function () {
  it('should not sign up an existing user', function (done) {
    _chai2.default.request(_server2.default).post('/user/signup').send(user).end(function (err, res) {
      _assert2.default.equal('The email address is already in use by another account.', res.body.message);
      res.should.have.status(200);
      _assert2.default.equal('200', res.statusCode);
      res.body.should.be.a('object');
      done();
    });
  });
});
describe('Sign in route', function () {
  it('should successfully sign in a user', function (done) {
    _chai2.default.request(_server2.default).post('/user/signin').send(SignIn).end(function (err, res) {
      res.body.message.should.equal('Success: you have successfuly signed in.');
      done();
    });
  });
  it('should ensure that user fills in correct details', function (done) {
    _chai2.default.request(_server2.default).post('/user/signin').send({ email: 'Olaide@mail.com', password: '' }).end(function (err, res) {
      res.body.message.should.equal('Error: The email or password of the user is invalid');
      done();
    });
  });
  it('should fail to sign up user with empty username or password', function (done) {
    _chai2.default.request(_server2.default).post('/user/signup').send({ userName: 'Olaide', email: 'Olaide@gmail.com', password: '', phoneNumber: '123450971' }).end(function (err, res) {
      _assert2.default.equal('The password must be 6 characters long or more.', res.body.message);
      done();
    });
  });
});
describe('Add group route', function () {
  it('should ensure a signed in user successfuly add group', function (done) {
    _chai2.default.request(_server2.default).post('/group').send({
      groupName: 'A test Group',
      userName: 'Goodboy'
    }).end(function (err, res) {
      _assert2.default.equal('New Group Successfully Created', res.body.message);
      done();
    });
  });
});

describe('Add user to group route', function () {
  it('should ensure a signed in user can successfuly add user to group', function (done) {
    _chai2.default.request(_server2.default).post('/group/-KtfPZnYDzsnNyM3ubdM/user').send({ groupId: '-KtfPZnYDzsnNyM3ubdM', userName: 'Goodboy', userId: '29dFoMH7boWe8NI7O2J7rRA4s4G2' }).end(function (err, res) {
      _assert2.default.equal('User successfully added', res.body.message);
      done();
    });
  });
});
describe('Sign out route', function () {
  it('should successfuly sign out user', function (done) {
    _chai2.default.request(_server2.default).get('/user/signout').end(function (err, res) {
      _assert2.default.equal('You have signed out of the Appliction', res.body.message);
      done();
    });
  });
});
describe('Get groups route', function () {
  it('should successfuly get users groups', function (done) {
    _chai2.default.request(_server2.default).get('/group').end(function (err, res) {
      done();
    });
  });
});
describe('Post message route', function () {
  it('should successfuly send message to groups', function (done) {
    _chai2.default.request(_server2.default).post('/message').send({ message: 'A test Message', groupId: '-KtfPZnYDzsnNyM3ubdM', priorityLevel: 'Normal', date: new Date(), author: 'Goodboy' }).end(function (err, res) {
      _assert2.default.equal('Message Sent successfully to Group', res.body.message);
      done();
    });
  });
});
describe('Get user messages route', function () {
  it('should successfuly get messages of groups', function (done) {
    _chai2.default.request(_server2.default).get('/group/-KtfPZnYDzsnNyM3ubdM/messages').end(function (err, res) {
      done();
    });
  });
});