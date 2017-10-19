process.env.NODE_ENV = 'test';

import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('Reset Password route', () => {
  it('should return status 400 for an empty email', (done) => {
    const user = {
      email: '',
    };
    chai.request(app)
      .post('/user/reset')
      .send(user)
      .end((err, res) => {
        assert.equal('Email is required',
          res.body.message);
        res.should.have.status(400);
        assert.equal('400', res.statusCode);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 400 for an invalid email', (done) => {
    const user = {
      email: 'sasil.com',
    };
    chai.request(app)
      .post('/user/reset')
      .send(user)
      .end((err, res) => {
        assert.equal('Please put a valid email',
          res.body.message);
        res.should.have.status(400);
        assert.equal('400', res.statusCode);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 403 for a non-existing user', (done) => {
    const user = {
      email: 'sasil@yahoo.com',
    };
    chai.request(app)
      .post('/user/reset')
      .send(user)
      .end((err, res) => {
        assert.equal('There is no user record corresponding to this identifier. The user may have been deleted.',
          res.body.message);
        res.should.have.status(403);
        assert.equal('403', res.statusCode);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 200 after successfully sending a reset', (done) => {
    const user = {
      email: 'wash@email.com',
    };
    chai.request(app)
      .post('/user/reset')
      .send(user)
      .end((err, res) => {
        assert.equal('An email has been sent to your email',
          res.body.message);
        res.should.have.status(200);
        assert.equal('200', res.statusCode);
        res.body.should.be.a('object');
        done();
      });
  });
});