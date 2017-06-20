// import all the route into a single index file
import express from 'express';
import path from 'path';

import signup from './signup';
import signin from './signin';
import group from './group';
import groupAdd from './groupAdd';
import signout from './signout';

// const router = express.Router()

// router.post('/user/signup', signup)

// router.post('/user/signin', signin);

// router.post('/user/signout', signout);

// router.post('/group', group);

// router.post('/group/:groupId', groupAdd)

// router.get(z
// 	express.static(path.join(__dirname, "../client/public")))


const index = (app, db) => {
  signup(app, db);
  signin(app, db);
  signout(app, db);
  group (app, db);
  groupAdd(app, db);

};
export default index;
