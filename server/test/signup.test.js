
import assert from 'assert';
import faker from 'faker';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.should();
chai.expect();
chai.use(chaiHttp);

describe('Signup route', () => {
  const user = {
    userName: 'Goodgirl',
    password: 'google123',
    email: '',
    phoneNumber: '1256793',
  };
  it('should return status 400 for missing email', (done) => {
    chai.request(app)
      .post('/user/signup')
      .send(user)
      .end((err, res) => {
        assert.equal('Email Address is Required',
          res.body.message);
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 400 for missing username', (done) => {
    const newUser = {
      userName: '',
      password: 'google123',
      email: 'good@gmail.com',
      phoneNumber: '2348037817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        assert.equal('Username is required',
          res.body.message);
        assert.equal('400', res.statusCode);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 400 for missing password', (done) => {
    const newUser = {
      userName: 'goodgirl',
      password: '',
      email: 'good@gmail.com',
      phoneNumber: '2348037817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        assert.equal('Password is required',
          res.body.message);
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 400 for missing phone number', (done) => {
    const newUser = {
      userName: 'goodgirl',
      password: 'adebola123',
      email: 'good@gmail.com',
      phoneNumber: '',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        assert.equal('phone number is required',
          res.body.message);
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 400 for password less than six characters', (done) => {
    const newUser = {
      userName: 'goodgirl',
      password: 'adeoa',
      email: 'good@gmail.com',
      phoneNumber: '2348037817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        assert.equal('Password must be between 6 and 50 characters',
          res.body.message);
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 400 for invalid email address', (done) => {
    const newUser = {
      userName: 'goodgirl',
      password: 'adeoala123',
      email: 'good.com',
      phoneNumber: '2348037817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        assert.equal('Please put a valid email',
          res.body.message);
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 400 for invalid phone number', (done) => {
    const newUser = {
      userName: 'goodgirl',
      password: 'adeoala123',
      email: 'goodgirl@gmail.com',
      phoneNumber: '37817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        assert.equal('Enter a valid phone Number',
          res.body.message);
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 401 for existing user', (done) => {
    const newUser = {
      userName: 'wash',
      password: 'wash@email.com',
      email: 'wash@email.com',
      phoneNumber: '08037817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        assert.equal('The email address is already in use by another account.',
          res.body.message);
        res.should.have.status(401);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return 201 when a user successfully registered', (done) => {
    const newUser = {
      userName: faker.name.findName(),
      password: 'anothedad@email.com',
      email: faker.internet.email(),
      phoneNumber: '2348037817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        assert.equal('Signup was successful',
          res.body.message);
        assert.equal('201', res.statusCode);
        res.body.should.be.a('object');
        done();
      });
  });
});
