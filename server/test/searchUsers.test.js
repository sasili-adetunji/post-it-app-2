
import chai from 'chai';
import assert from 'assert';
import chaiHttp from 'chai-http';
import app from '../server';

chai.should();
chai.expect();
chai.use(chaiHttp);

describe('Search Users Route', () => {
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
  it('should return status 200 and an object of the user', (done) => {
    const users = {
      email: 'wash@email.com',
      userName: 'wash',
      userId: 'RjGG3Tb5VVcbMUCLrAx6fn4lQZL2'
    };
    const userName = 'w';
    chai.request(app)
      .get(`/user/search?user=${userName}`)
      .set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        assert.equal(users.userId,
        res.body.user.userId);
        res.body.user.should.deep.equals(users);
        res.body.user.should.be.an.instanceOf(Object);
        done();
      });
  });
});
