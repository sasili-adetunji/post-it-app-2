
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.should();
chai.use(require('chai-things'));
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
  describe('Post message route: ', () => {
    it('should return validation error when the groupId is empty', (done) => {
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
    it('should return validation error when the proirity level is empty', (done) => {
      const message = {
        message: 'Andela',
        groupId: '-Kz55De8W2kkUP150B8l'
      };
      chai.request(app)
        .post('/message')
        .set('x-access-token', token)
        .send(message)
        .end((err, res) => {
          assert.equal('Priority level is required',
          res.body.errorMessage);
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });
  });
  it('should successfully sent a message to group and return the message',
    (done) => {
      const message = {
        message: 'How u dey??',
        groupId: '-Kz55De8W2kkUP150B8l',
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
            assert.equal('normal',
          res.body.messages[0].priorityLevel);
            assert.equal('Message Sent successfully to Group',
          res.body.message);
            res.should.have.status(201);
            res.body.messages.should.be.a('array');
            res.body.messages.should.be.an.instanceOf(Object);
            done();
          });
    });
  describe('User message route: ', () => {
    it('should successfully return messages in a group',
    (done) => {
      chai.request(app)
        .get('/group/-Kz55De8W2kkUP150B8l/messages')
        .set('x-access-token', token)
        .end((err, res) => {
          res.should.have.status(200);
          assert.equal('How u dey??',
          res.body.messages[0].messageText);
          assert.equal('normal',
          res.body.messages[0].priorityLevel);
          res.body.messages.should.be.a('array');
          res.body.messages.should.be.an.instanceOf(Object);
          done();
        });
    });
  });
  describe('Read users route: ', () => {
    it('should return the username of readusers of a particular messages',
    (done) => {
      chai.request(app)
        .get('/group/-Kz3seSl38cDRsuS-J1g/readUsers')
        .set('x-access-token', token)
        .end((err, res) => {
          res.body.readUsers.should.include.something.that.deep.equals({ userName: 'wash' });
          res.should.have.status(200);
          res.body.readUsers.should.be.a('array');
          res.body.readUsers.should.be.an.instanceOf(Object);
          done();
        });
    });
  });
});
