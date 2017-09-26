import firebase from 'firebase';
import dotenv from 'dotenv';
import users from './users';
import messages from './messages';
import groups from './groups';

dotenv.config();

const nodeEnv = process.env.NODE_ENV || 'development';
let prefix = '';
if (nodeEnv === 'test') {
  prefix = 'TEST_';
}
const config = {
  apiKey: process.env[`${prefix}apiKey`],
  authDomain: process.env[`${prefix}authDomain`],
  databaseURL: process.env[`${prefix}databaseURL`],
  projectId: process.env[`${prefix}projectId`],
  storageBucket: process.env[`${prefix}storageBucket`],
  messagingSenderId: process.env[`${prefix}messagingSenderId`]
};
firebase.initializeApp(config);

module.exports = (app) => {
  users(app);
  groups(app);
  messages(app);
};
