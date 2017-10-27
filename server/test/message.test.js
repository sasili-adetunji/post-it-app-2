
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.should();
chai.expect();
chai.use(chaiHttp);

describe('Message Route: ', () => {
  describe('Post message route', () => {
    it('should return status 400 for an empty message', (done) => {
      const message = '';
      chai.request(app)
        .post('/message')
        .send({ message })
        .end((err, res) => {
          assert.equal('Please enter a valid message',
          res.body.errorMessage);
          res.should.have.status(400);
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
      const message = {
        message: 'How u dey??',
        author: 'ik@email.com',
        groupId: '-Kwog-k_NHdynRzt0YfT',
        priorityLevel: 'Normal',
        date: new Date(),
      };
      chai.request(app)
          .post('/message')
          .send(message)
          .end((err, res) => {
            assert.equal('Message Sent successfully to Group',
          res.body.message);
            res.should.have.status(200);
            res.body.messages.should.be.a('array');
            res.body.messages.should.be.an.instanceOf(Object);
            done();
          });
    });
  });
  describe('User message route', () => {
    it('should return status 200 for when retrieving groups messages', (done) => {
      chai.request(app)
        .get('/group/-Kwog-k_NHdynRzt0YfT/messages')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.messages.should.be.a('array');
          res.body.messages.should.be.an.instanceOf(Object);
          done();
        });
    });
  });
  describe('Read users route', () => {
    it('should return status 200 for when retrieving read users', (done) => {
      chai.request(app)
        .get('/group/-KwpIpKLZKuaWVAhdFfj/readUsers')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.readUsers.should.be.a('array');
          res.body.readUsers.should.be.an.instanceOf(Object);
          done();
        });
    });
  });
});
