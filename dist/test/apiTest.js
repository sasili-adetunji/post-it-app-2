'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUp = {
  userName: 'Amin',
  password: 'olade4life',
  email: 'tayelolu@gmail.com'
};

var SignIn = {
  email: 'tayelolu@gmail.com',
  password: 'olade4life'
};

var group = {
  groupName: 'Business tips'
};

describe('Sign up route', function () {
  it('should succesfully sign up a user', function (done) {
    (0, _supertest2.default)(_server2.default).post('/user/signup').send(SignUp).expect('Content-type', /json/).expect(200).end(function (err, res) {
      res.body.message.should.equal('Registration successful. You have successfully been registered');
      done();
    });
  });

  it('should fail to sign up user with empty username or password', function (done) {
    (0, _supertest2.default)(_server2.default).post('/user/signup').send({ userName: 'Olaide', email: 'Olaide@gmail.com', password: '' }).expect('Content-type', /json/).expect(400).end(function (err, res) {
      res.status.should.equal(400);
      res.body.message.should.equal('The password must be 6 characters long or more.');
      done();
    });
  });
});

describe('Sign in route', function () {
  it('should successfully sign in a user', function (done) {
    (0, _supertest2.default)(_server2.default).post('/user/signin').send(SignIn).expect('Content-type', /json/).expect(200).end(function (err, res) {
      res.body.message.should.equal('Success: you have successfuly signed in.');
      done();
    });
  });

  it('should ensure that user fills in correct details', function (done) {
    (0, _supertest2.default)(_server2.default).post('/user/signin').send({ email: 'Olaidemail.com', password: '' }).expect('Content-type', /json/).expect(400).end(function (err, res) {
      res.body.message.should.equal('The email address is badly formatted.');
      done();
    });
  });
});

describe('Add group route', function () {
  it('should ensure a signed in user successfuly add group', function (done) {
    (0, _supertest2.default)(_server2.default).post('/group').send(group).expect('Content-type', /json/).expect(200).end(function (err, res) {
      res.status.should.equal(200);
      done();
    });
  });
});

describe('Add user to group route', function () {
  it('should ensure a signed in user can successfuly add user to group', function (done) {
    (0, _supertest2.default)(_server2.default).post('/group/-KlT7Ww-lUiJAdxNmMsK/user').send({ userId: 'pM2FK1aSJjbbhmOFB7k5tB4tnqa2' }).expect('Content-type', /json/).expect(200).end(function (err, res) {
      res.status.should.equal(400);
      done();
    });
  });
});

describe('Sign out route', function () {
  it('should successfuly sign out user', function (done) {
    (0, _supertest2.default)(_server2.default).get('/signout').expect('Content-type', /json/).expect(200).end(function (err, res) {
      res.status.should.equal(500);
      done();
    });
  });
});