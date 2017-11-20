
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.should();
chai.expect();
chai.use(chaiHttp);

describe('Signin route', () => {
  const user = {
    password: 'google123',
    email: '',
  };
  it('should return status 400 for missing email', (done) => {
    chai.request(app)
      .post('/user/signin')
      .send(user)
      .end((err, res) => {
        assert.equal('Email is required',
          res.body.message);
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 400 for missing password', (done) => {
    const newUser = {
      password: '',
      email: 'goodboy@gmail.com',
    };
    chai.request(app)
      .post('/user/signin')
      .send(newUser)
      .end((err, res) => {
        assert.equal('Password is required',
          res.body.message);
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 400 for invalid email', (done) => {
    const newUser = {
      password: 'adeola123',
      email: 'goodboymail.com',
    };
    chai.request(app)
      .post('/user/signin')
      .send(newUser)
      .end((err, res) => {
        assert.equal('Please put a valid email',
          res.body.message);
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 400 for password less than 6 characters', (done) => {
    const newUser = {
      password: 'adeol',
      email: 'goodboy@mail.com',
    };
    chai.request(app)
      .post('/user/signin')
      .send(newUser)
      .end((err, res) => {
        assert.equal('Password must be between 6 and 50 characters',
          res.body.message);
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 401 for wrong password', (done) => {
    const newUser = {
      password: 'adeolaaa',
      email: 'wash@email.com',
    };
    chai.request(app)
      .post('/user/signin')
      .send(newUser)
      .end((err, res) => {
        assert.equal('wrong password',
          res.body.message);
        res.should.have.status(401);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 200 and token for successfull sign in', (done) => {
    const newUser = {
      password: 'wash@email.com',
      email: 'wash@email.com',
    };
    chai.request(app)
      .post('/user/signin')
      .send(newUser)
      .end((err, res) => {
        assert.equal('Success: you have successfuly signed in.',
          res.body.message);
        res.body.should.have.property('token');
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
