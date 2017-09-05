process.env.NODE_ENV = 'test';
import supertest from 'supertest';
import assert from 'assert';
import chai from 'chai';
import app from '../server';
import chaiHttp from 'chai-http';
const expect = chai.expect;

chai.use(chaiHttp);
const should = chai.should();

describe('PostIt', () => {
  it('allows anyone to visit its site', (done) => {
    chai.request(app)
      .get('http:127.0.0.1:8000')
      .end((err, res) => {
        res.should.have.status(200);
        assert.equal(200, res.statusCode);
        done();
      });
  });
});
