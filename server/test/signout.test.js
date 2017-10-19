process.env.NODE_ENV = 'test';

import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('Signout route', () => {
  it('should return status 200 after successfully signed out', (done) => {
    chai.request(app)
      .get('/user/signout')
      .end((err, res) => {
        assert.equal('You have signed out of the Application',
          res.body.message);
        res.should.have.status(200);
        assert.equal('200', res.statusCode);
        res.body.should.be.a('object');
        done();
      });
  });
});
