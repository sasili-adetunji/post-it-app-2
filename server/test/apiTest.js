process.env.NODE_ENV = 'test';

import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

const user = {
  userName: 'Goodboy',
  password: 'googleoo',
  email: 'goodboy@gmail.com',
  phoneNumber: '08021256793'
};
const newUser = {
  userName: 'Goodgirl',
  password: 'google123',
  email: 'goodgirl@gmail.com',
  phoneNumber: '08021256793'
};
const SignIn = {
  email: 'goodboy@gmail.com',
  password: 'googleoo'
};

const group = {
  groupName: 'Business tips'
};

describe('PostIt Signup route', () => {
  it('should not sign up an existing user', (done) => {
    chai.request(app)
      .post('/user/signup')
      .send(user)
      .end((err, res) => {
        assert.equal('The email address is already in use by another account.',
          res.body.message);
        res.should.have.status(200);
        assert.equal('200', res.statusCode);
        res.body.should.be.a('object');
        done();
      });
  });
});
describe('Sign in route', () => {
  it('should successfully sign in a user', (done) => {
    chai.request(app)
    .post('/user/signin')
    .send(SignIn)
    .end((err, res) => {
      res.body.message.should.equal('Success: you have successfuly signed in.');
      done();
    });
  });
  it('should ensure that user fills in correct details', (done) => {
    chai.request(app)
    .post('/user/signin')
    .send({ email: 'Olaide@mail.com', password: '' })
    .end((err, res) => {
      res.body.message.should.equal('Error: The email or password of the user is invalid');
      done();
    });
  });
  it('should fail to sign up user with empty username or password', (done) => {
    chai.request(app)
    .post('/user/signup')
    .send({ userName: 'Olaide', email: 'Olaide@gmail.com', password: '', phoneNumber: '123450971' })
    .end((err, res) => {
      assert.equal('The password must be 6 characters long or more.',
          res.body.message);
      done();
    });
  });
});
describe('Add group route', () => {
  it('should ensure a signed in user successfuly add group', (done) => {
    chai.request(app)
    .post('/group')
    .send({
      groupName: 'A test Group',
      userName: 'Goodboy'
    })
    .end((err, res) => {
      assert.equal('New Group Successfully Created',
          res.body.message);
      done();
    });
  });
});

describe('Add user to group route', () => {
  it('should ensure a signed in user can successfuly add user to group', (done) => {
    chai.request(app)
    .post('/group/-KtfPZnYDzsnNyM3ubdM/user')
    .send({ groupId: '-KtfPZnYDzsnNyM3ubdM', userName: 'Goodboy', userId: '29dFoMH7boWe8NI7O2J7rRA4s4G2' })
    .end((err, res) => {
      assert.equal('User successfully added',
          res.body.message);
      done();
    });
  });
});
describe('Get groups route', () => {
  it('should successfuly get users groups', (done) => {
    chai.request(app)
    .get('/group')
    .end((err, res) => {
      done();
    });
  });
});
describe('Post message route', () => {
  it('should successfuly send message to groups', (done) => {
    chai.request(app)
    .post('/message')
    .send({ message: 'A test Message', groupId: '-KtfPZnYDzsnNyM3ubdM', priorityLevel: 'Normal', date: new Date(), author: 'Goodboy', status: 'Unread' })
    .end((err, res) => {
      assert.equal('Message Sent successfully to Group',
          res.body.message);
      done();
    });
  });
});
describe('Get user messages route', () => {
  it('should successfuly get messages of groups', (done) => {
    chai.request(app)
    .get('/group/-KtfPZnYDzsnNyM3ubdM/messages')
    .end((err, res) => {
      done();
    });
  });
});

describe('Sign out route', () => {
  it('should successfuly sign out user', (done) => {
    chai.request(app)
    .get('/user/signout')
    .end((err, res) => {
      assert.equal('You have signed out of the Appliction',
          res.body.message);
      done();
    });
  });
});
