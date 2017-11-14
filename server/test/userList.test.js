
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.should();
chai.expect();
chai.use(chaiHttp);

describe('Users list route', () => {
  it('should return status 200 for successfull sign in', (done) => {
    const newUser = {
      password: 'live@email.com',
      email: 'live@email.com',
    };
    chai.request(app)
      .post('/user/signin')
      .send(newUser)
      .end((err, res) => {
        assert.equal('Success: you have successfuly signed in.',
          res.body.message);
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
describe('UserList Route', () => {
  let token = '';
  before((done) => {
    chai.request(app)
    .post('/user/signin')
    .send({ password: 'wash@email.com', email: 'wash@email.com', })
    .end((err, res) => {
      token = res.body.token;
      done();
    });
  });
  it('should return status 200 and list of array of users', (done) => {
    chai.request(app)
      .get('/user/users')
      .set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.users.should.be.a('array');
        res.body.users.should.be.an.instanceOf(Object);
        done();
      });
  });
});
