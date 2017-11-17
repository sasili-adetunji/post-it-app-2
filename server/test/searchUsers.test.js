
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
  it('should return status 401 if has no token', (done) => {
    const keyword = 'w';
    chai.request(app)
    .get(`/user/search?user=${keyword}`)
    .end((err, res) => {
      res.status.should.equal(401);
      res.body.should.be.a('object');
      res.body.should.have.property('error').eql('No valid token provided');
      done();
    });
  });
  it('should return status 400 search query is not provided', (done) => {
    chai.request(app)
      .get('/user/search?user=')
      .set('x-access-token', token)
      .end((err, res) => {
        res.status.should.equal(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Please input something');
        done();
      });
  });
  it('should return status 200 and an object of the user', (done) => {
    const users = {
      email: 'wash@email.com',
      userName: 'wash',
      userId: 'Ztj2rsYZF4gvBeb59EmRyv4qupp2'
    };
    const userName = 'wa';
    chai.request(app)
      .get(`/user/search?user=${userName}`)
      .set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        assert.equal(users.userId,
        res.body.user.userId);
        res.body.user.userName.should.eql('wash');
        res.body.user.email.should.eql('wash@email.com');
        res.body.user.should.deep.equals(users);
        res.body.user.should.be.an.instanceOf(Object);
        done();
      });
  });
});
