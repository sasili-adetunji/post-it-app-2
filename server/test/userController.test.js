
import assert from 'assert';
import faker from 'faker';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

chai.use(require('chai-things'));
chai.should();
chai.use(chaiHttp);

describe('Signup route: ', () => {
  const user = {
    userName: 'Goodgirl',
    password: 'google123',
    email: '',
    phoneNumber: '1256793',
  };
  it('should return validation error for missing email', (done) => {
    chai.request(app)
      .post('/user/signup')
      .send(user)
      .end((err, res) => {
        res.body.message.should.be
        .eql('Email Address is Required');
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return validation error for missing username', (done) => {
    const newUser = {
      userName: '',
      password: 'google123',
      email: 'good@gmail.com',
      phoneNumber: '2348037817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.body.message.should.be
        .eql('Username is required');
        assert.equal('400', res.statusCode);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return validation error for missing password', (done) => {
    const newUser = {
      userName: 'goodgirl',
      password: '',
      email: 'good@gmail.com',
      phoneNumber: '2348037817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.body.message.should.be
        .eql('Password is required');
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return validation error for missing phone number', (done) => {
    const newUser = {
      userName: 'goodgirl',
      password: 'adebola123',
      email: 'good@gmail.com',
      phoneNumber: '',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.body.message.should.be
        .eql('phone number is required');
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return validation error for password less than six characters', (done) => {
    const newUser = {
      userName: 'goodgirl',
      password: 'adeoa',
      email: 'good@gmail.com',
      phoneNumber: '2348037817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.body.message.should.be
        .eql('Password must be between 6 and 50 characters');
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return validation error for badly formatted email address',
  (done) => {
    const newUser = {
      userName: 'goodgirl',
      password: 'adeoala123',
      email: 'good.com',
      phoneNumber: '2348037817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.body.message.should.be
        .eql('Please put a valid email');
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return validation error for invalid phone number', (done) => {
    const newUser = {
      userName: 'goodgirl',
      password: 'adeoala123',
      email: 'goodgirl@gmail.com',
      phoneNumber: '37817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.body.message.should.be
        .eql('Enter a valid phone Number');
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should not create a user with an existing email', (done) => {
    const newUser = {
      userName: 'amaka',
      password: 'wash@email.com',
      email: 'wash@email.com',
      phoneNumber: '08037817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.body.message.should.be
        .eql('email already in use');
        res.should.have.status(409);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should not create a user when the username exist', (done) => {
    const newUser = {
      userName: 'wash',
      password: 'chima@email.com',
      email: 'chima@email.com',
      phoneNumber: '08037817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.body.message.should.be
        .eql('Username already exist');
        res.should.have.status(409);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should successfully create a new user and return a token',
  (done) => {
    const newUser = {
      userName: faker.name.findName(),
      password: 'anothedad@email.com',
      email: faker.internet.email(),
      phoneNumber: '2348037817325',
    };
    chai.request(app)
      .post('/user/signup')
      .send(newUser)
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.body.message.should.be
        .eql('Signup was successful');
        res.body.should.have.property('token');
        assert.equal('201', res.statusCode);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('Signin route:', () => {
  const user = {
    password: 'google123',
    email: '',
  };
  it('should return validation errro for missing email', (done) => {
    chai.request(app)
    .post('/user/signin')
    .send(user)
    .end((err, res) => {
      res.body.message.should.be
        .eql('Email is required');
      res.should.have.status(400);
      res.body.should.be.a('object');
      done();
    });
  });
  it('should return validation error for missing password', (done) => {
    const newUser = {
      password: '',
      email: 'goodboy@gmail.com',
    };
    chai.request(app)
      .post('/user/signin')
      .send(newUser)
      .end((err, res) => {
        res.body.message.should.be
        .eql('Password is required');
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return validation error for invalid email', (done) => {
    const newUser = {
      password: 'adeola123',
      email: 'goodboymail.com',
    };
    chai.request(app)
      .post('/user/signin')
      .send(newUser)
      .end((err, res) => {
        res.body.message.should.be
        .eql('Please put a valid email');
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return validation error for password less than 6 characters', (done) => {
    const newUser = {
      password: 'adeol',
      email: 'goodboy@mail.com',
    };
    chai.request(app)
      .post('/user/signin')
      .send(newUser)
      .end((err, res) => {
        res.body.message.should.be
        .eql('Password must be between 6 and 50 characters');
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 401 for wrong password', (done) => {
    const newUser = {
      password: 'adeolaaa',
      email: 'wash@email.com',
    };
    chai.request(app)
      .post('/user/signin')
      .send(newUser)
      .end((err, res) => {
        res.body.message.should.be
        .eql('wrong password');
        res.should.have.status(401);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 200 and token for successfull sign in', (done) => {
    const newUser = {
      password: 'wash@email.com',
      email: 'wash@email.com',
    };
    chai.request(app)
      .post('/user/signin')
      .send(newUser)
      .end((err, res) => {
        res.body.message.should.be
        .eql('Success: you have successfuly signed in.');
        res.body.should.have.property('token');
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('Signout route:', () => {
  it('should successfully signed out the user from the app', (done) => {
    chai.request(app)
      .get('/user/signout')
      .end((err, res) => {
        res.body.message.should.be
        .eql('You have signed out of the Application');
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('Reset Password route:', () => {
  it('should return status 400 for an empty email', (done) => {
    const user = {
      email: '',
    };
    chai.request(app)
      .post('/user/reset')
      .send(user)
      .end((err, res) => {
        res.body.message.should.be
        .eql('Email is required');
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 400 for an invalid email', (done) => {
    const user = {
      email: 'sasil.com',
    };
    chai.request(app)
      .post('/user/reset')
      .send(user)
      .end((err, res) => {
        res.body.message.should.be
        .eql('Please put a valid email');
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 404 for a non-existing user', (done) => {
    const user = {
      email: 'sasil@yahoo.com',
    };
    chai.request(app)
      .post('/user/reset')
      .send(user)
      .end((err, res) => {
        res.body.message.should.be
        .eql('The user does not exist.');
        res.should.have.status(404);
        res.body.should.be.a('object');
        done();
      });
  });
  it('should return status 200 after successfully sending a reset', (done) => {
    const user = {
      email: 'Bernie.Gleason@yahoo.com',
    };
    chai.request(app)
      .post('/user/reset')
      .send(user)
      .end((err, res) => {
        assert.equal('An email has been sent to your email',
          res.body.message);
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('Search Users Route: ', () => {
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
  it('should fail to search and return status 401 if no token', (done) => {
    const keyword = 'w';
    chai.request(app)
    .get(`/user/search?user=${keyword}`)
    .end((err, res) => {
      res.body.should.have.property('error')
      .eql('No valid token provided');
      res.body.should.be.a('object');
      res.status.should.equal(401);
      done();
    });
  });
  it('should return validation error when search query is not provided', (done) => {
    chai.request(app)
      .get('/user/search?user=')
      .set('x-access-token', token)
      .end((err, res) => {
        res.body.message.should.be
        .eql('Please input something');
        res.status.should.equal(400);
        res.body.should.be.a('object');
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
        assert.equal('Ztj2rsYZF4gvBeb59EmRyv4qupp2',
        res.body.user.userId);
        res.body.user.userName.should.eql('wash');
        res.body.user.email.should.eql('wash@email.com');
        res.body.user.should.deep.equals(users);
        res.body.user.should.be.an.instanceOf(Object);
        done();
      });
  });
});

describe('UserList Route', () => {
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
  it('should return of array of users object with username and userId', (done) => {
    chai.request(app)
      .get('/user/users')
      .set('x-access-token', token)
      .end((err, res) => {
        res.body.users.should.include.something.that.deep.equals({ userId: 'Ztj2rsYZF4gvBeb59EmRyv4qupp2', userName: 'wash' });
        res.should.have.status(200);
        res.body.users.should.be.a('array');
        res.body.users.should.be.an.instanceOf(Object);
        done();
      });
  });
});
