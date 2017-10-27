
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.should();
chai.expect();
chai.use(chaiHttp);

describe('Signout route', () => {
  it('should return status 200 after successfully signed out', (done) => {
    chai.request(app)
      .get('/user/signout')
      .end((err, res) => {
        assert.equal('You have signed out of the Application',
          res.body.message);
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
