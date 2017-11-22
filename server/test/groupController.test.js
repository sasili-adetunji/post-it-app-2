
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.should();
chai.expect();
chai.use(chaiHttp);

describe('Group Route:', () => {
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
  describe('Create Group route', () => {
    it('should return validation error group name is empty', (done) => {
      const groupName = '';
      chai.request(app)
        .post('/group')
        .set('x-access-token', token)
        .send({ groupName })
        .end((err, res) => {
          assert.equal('Please enter a valid group name',
          res.body.message);
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });
    it('should return status 401 when user is not logged in (no token is provided)', (done) => {
      const groupName = 'Andela';
      chai.request(app)
        .post('/group')
        .set('x-accesstoken', '')
        .send({ groupName })
        .end((err, res) => {
          assert.equal('No valid token provided',
          res.body.error);
          res.should.have.status(401);
          res.body.should.be.a('object');
          done();
        });
    });
    it('should successfully create group if token and group name are provided',
    (done) => {
      const group = { groupName: 'JS Developers' };
      chai.request(app)
          .post('/group')
          .set('x-access-token', token)
          .send(group)
          .end((err, res) => {
            assert.equal('New Group Successfully Created', res.body.message);
            res.should.have.status(201);
            res.body.groups[0].should.have.property('groupName').eql('JS Developers');
            res.body.groups.should.be.a('array');
            res.body.groups.should.be.an.instanceOf(Object);
            done();
          });
    });
  });
  describe('Add Group route', () => {
    it('should return validation errror for an empty username', (done) => {
      const group = {
        groupName: 'Andela Programmers',
        userName: '',
        userId: 'gGtY4BsjhCN9fmIMrosCO5cTSw63',
        groupId: '-Kykr12Wi3xjxm1jeARk'
      };
      chai.request(app)
        .post('/group/-Kykr12Wi3xjxm1jeARk/user')
        .set('x-access-token', token)
        .send(group)
        .end((err, res) => {
          assert.equal('User name is required',
          res.body.message);
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });
    it('should successfully add a member and return the added member',
    (done) => {
      const group = {
        groupName: 'JS Developers',
        userName: 'Sasiliyu Adetunji',
        userId: 'jESYkUgvnkcY3xPp0cp7INoGOFh1',
        groupId: '-Kz7Gy70lmYffpImGj1J'
      };
      chai.request(app)
        .post('/group/-Kz7Gy70lmYffpImGj1J/user')
        .set('x-access-token', token)
        .send(group)
        .end((err, res) => {
          assert.equal('User successfully added',
          res.body.message);
          assert.equal('Sasiliyu Adetunji',
          res.body.user.userName);
          assert.equal('201', res.statusCode);
          res.body.should.be.a('object');
          done();
        });
    });
    it('should return 409 when the user already exist in group', (done) => {
      const group = {
        groupName: 'Cohort 30',
        userName: 'wash',
        userId: 'Ztj2rsYZF4gvBeb59EmRyv4qupp2',
        groupId: '-Kz55De8W2kkUP150B8l'
      };
      chai.request(app)
      .post('/group/-Kz55De8W2kkUP150B8l/user')
      .set('x-access-token', token)
      .send(group)
      .end((err, res) => {
        assert.equal('The user already exist in the group',
        res.body.message);
        res.should.have.status(409);
        res.body.should.be.a('object');
        done();
      });
    });
  });
  describe('Groups list route', () => {
    it('should return list of groups of a user when token is provided', (done) => {
      chai.request(app)
      .get('/user/groups')
      .set('x-access-token', token)
      .end((err, res) => {
        assert.equal('cohort 29', res.body.groups[0].groupName);
        res.should.have.status(200);
        res.body.groups.should.be.a('array');
        res.body.groups.should.be.an.instanceOf(Object);
        done();
      });
    });
  });
  describe('Users in Groups route:', () => {
    it('should return list of users in a group when token is provided', (done) => {
      chai.request(app)
      .get('/group/-Kz55De8W2kkUP150B8l/users')
      .set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        assert.equal('wash', res.body.users[0].userName);
        res.body.users.should.be.a('array');
        res.body.users.should.be.an.instanceOf(Object);
        done();
      });
    });
  });
});
