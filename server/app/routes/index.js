// import all the route into a single index file
import express from 'express';
import path from 'path';

import signup from './signup';
import signin from './signin';
import group from './group';
import groupAdd from './groupAdd';
import signout from './signout';
import message from './message';
import groupList from './groupList';
import usersList from './usersList';
import userGroup from './userGroup';
import userMessage from './userMessage';
import googleLogin from './googleLogin';
import resetPassword from './resetPassword';

const index = (app, db) => {
  signup(app, db);
  signin(app, db);
  signout(app, db);
  group (app, db);
  message (app, db);
  groupAdd(app, db);
  usersList(app, db);
  groupList(app, db);
  userMessage(app, db);
  userGroup(app, db);
  googleLogin(app, db);
  resetPassword(app, db);


};
export default index;
