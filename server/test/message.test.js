
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.should();
chai.expect();
chai.use(chaiHttp);

describe('Message Route: ', () => {
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
  describe('Post message route', () => {
    it('should return status 400 when for an empty group', (done) => {
      const message = 'Andela';
      chai.request(app)
        .post('/message')
        .set('x-access-token', token)
        .send({ message })
        .end((err, res) => {
          assert.equal('Group Id is required',
          res.body.errorMessage);
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });
    it('should return status 201 if a message is successfully created',
    (done) => {
      const message = {
        message: 'How u dey??',
        author: 'ik@email.com',
        groupId: '-Kykr12Wi3xjxm1jeARk',
        priorityLevel: 'normal',
        date: new Date(),
      };
      chai.request(app)
          .post('/message')
          .send(message)
          .set('x-access-token', token)
          .end((err, res) => {
            assert.equal('How u dey??',
          res.body.messages[0].messageText);
            assert.equal('Message Sent successfully to Group',
          res.body.message);
            res.should.have.status(201);
            res.body.messages.should.be.a('array');
            res.body.messages.should.be.an.instanceOf(Object);
            done();
          });
    });
  });
  describe('User message route', () => {
    it('should return status 200 for when retrieving groups messages',
    (done) => {
      chai.request(app)
        .get('/group/-Kykr12Wi3xjxm1jeARk/messages')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          assert.equal('How u dey??',
          res.body.messages[0].messageText);
          res.body.messages.should.be.a('array');
          res.body.messages.should.be.an.instanceOf(Object);
          done();
        });
    });
  });
  describe('Read users route', () => {
    it('should return status 200 for when retrieving read users', (done) => {
      chai.request(app)
        .get('/group/-Kyl9quus5upr81c26r3/readUsers')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.readUsers.should.be.a('array');
          res.body.readUsers.should.be.an.instanceOf(Object);
          done();
        });
    });
  });
});
