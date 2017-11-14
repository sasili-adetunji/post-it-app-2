
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.should();
chai.expect();
chai.use(chaiHttp);

describe('Group Route', () => {
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
    it('should return status 400 for an empty group name', (done) => {
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
    it('should return status 401 when no token is provided', (done) => {
      const groupName = 'Andela';
      chai.request(app)
        .post('/group')
        .set('x-accesstoken', '')
        .send({ groupName })
        .end((err, res) => {
          assert.equal('No valid token provided',
          res.body.error);
          res.should.have.status(403);
          res.body.should.be.a('object');
          done();
        });
    });
    it('should return status 201 if a group is successfully created', (done) => {
      const group = { groupName: 'Andela Programmers' };
      chai.request(app)
          .post('/group')
          .set('x-access-token', token)
          .send(group)
          .end((err, res) => {
            assert.equal('New Group Successfully Created',
          res.body.message);
            assert.equal('Andela Programmers',
          res.body.groups[0].groupName);
            res.should.have.status(201);
            res.body.groups.should.be.a('array');
            res.body.groups.should.be.an.instanceOf(Object);
            done();
          });
    });
  });
  describe('Add Group route', () => {
    it('should return status 400 for an empty username', (done) => {
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
          assert.equal('User can not be empty',
          res.body.message);
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });
    it('should return status 201 after successfully adding a member to group', (done) => {
      const group = {
        groupName: 'Andela Programmers',
        userName: 'sas',
        userId: 'gGtY4BsjhCN9fmIMrosCO5cTSw63',
        groupId: '-Kykr12Wi3xjxm1jeARk'
      };
      chai.request(app)
        .post('/group/-Kykr12Wi3xjxm1jeARk/user')
        .set('x-access-token', token)
        .send(group)
        .end((err, res) => {
          assert.equal('User successfully added',
          res.body.message);
          assert.equal('sas',
          res.body.user.userName);
          assert.equal('201', res.statusCode);
          res.body.should.be.a('object');
          done();
        });
    });
    it('should return 403 when the user already exist in group', (done) => {
      const group = {
        groupName: '',
        userName: 'sas',
        userId: 'gGtY4BsjhCN9fmIMrosCO5cTSw63',
        groupId: '-Kykr12Wi3xjxm1jeARk'
      };
      chai.request(app)
      .post('/group/-Kykr12Wi3xjxm1jeARk/user')
      .set('x-access-token', token)
      .send(group)
      .end((err, res) => {
        assert.equal('The user already exist in the group',
        res.body.message);
        res.should.have.status(403);
        res.body.should.be.a('object');
        done();
      });
    });
  });
  describe('Groups list route', () => {
    it('should return status 200 if a user is signed in', (done) => {
      chai.request(app)
      .get('/user/groups')
      .set('x-access-token', token)
      .end((err, res) => {
        assert.equal('firstgroup',
        res.body.groups[0].groupName);
        res.should.have.status(200);
        res.body.groups.should.be.a('array');
        res.body.groups.should.be.an.instanceOf(Object);
        done();
      });
    });
  });
  describe('Users in Groups route', () => {
    it('should return status 200 if a user is signed in', (done) => {
      chai.request(app)
      .get('/group/-Kykr12Wi3xjxm1jeARk/users')
      .set('x-access-token', token)
      .end((err, res) => {
        assert.equal('wash',
        res.body.users[0].userName);
        res.should.have.status(200);
        res.body.users.should.be.a('array');
        res.body.users.should.be.an.instanceOf(Object);
        done();
      });
    });
  });
});
