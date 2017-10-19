
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('Group Route', () => {
  describe('Create Group route', () => {
    it('should return status 400 for an empty group name', (done) => {
      const groupName = '';
      chai.request(app)
        .post('/group')
        .send({ groupName })
        .end((err, res) => {
          assert.equal('Please enter a valid group name',
          res.body.message);
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });
    it('should return status 401 for an empty group name', (done) => {
      const groupName = 'Andela JS Programmers';
      chai.request(app)
      .post('/group')
      .send({ groupName })
      .end((err, res) => {
        assert.equal('Please log in to create groups',
          res.body.message);
        res.should.have.status(401);
        res.body.should.be.a('object');
        done();
      });
    });
    it('should return status 200 for successfull sign in', (done) => {
      const newUser = {
        password: 'ik@email.com',
        email: 'ik@email.com',
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
    it('should return status 200 if a group is successfully created', (done) => {
      const group = {
        groupName: 'Andela Programmers',
        userName: 'ik@email.com',
      };
      chai.request(app)
          .post('/group')
          .send(group)
          .end((err, res) => {
            assert.equal('New Group Successfully Created',
          res.body.message);
            res.should.have.status(200);
            res.body.groups.should.be.a('array');
            res.body.groups.should.be.an.instanceOf(Object);
            done();
          });
    });
  });
  describe('Add Group route', () => {
    it('should return status 400 for an a user name that does not exist', (done) => {
      const group = {
        groupName: 'Andela JS Programmers',
        userName: 'ab@email.com',
      };
      chai.request(app)
        .post('/group/-Kwog-k_NHdynRzt0YfT/user')
        .send({ group })
        .end((err, res) => {
          assert.equal('This User does not exist',
          res.body.message);
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });
    it('should return status 200 after successfully adding a member to group', (done) => {
      const group = {
        groupName: 'Andela JS Programmers',
        userName: 'wash@email.com',
        userId: 'LBBJALuz6sXxYBYCvI324ZCCwvv1',
        groupId: '-Kwog-k_NHdynRzt0YfT',
      };
      chai.request(app)
        .post('/group/-Kwog-k_NHdynRzt0YfT/user')
        .send(group)
        .end((err, res) => {
          assert.equal('User successfully added',
          res.body.message);
          assert.equal('200', res.statusCode);
          res.body.should.be.a('object');
          done();
        });
    });
  });
  describe('Groups list route', () => {
    it('should return status 200 if a user is signed in', (done) => {
      chai.request(app)
      .get('/user/groups')
      .end((err, res) => {
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
      .get('/group/-Kwog-k_NHdynRzt0YfT/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.users.should.be.a('array');
        res.body.users.should.be.an.instanceOf(Object);
        done();
      });
    });
  });
});
