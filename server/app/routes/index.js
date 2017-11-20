import firebase from 'firebase';
import users from './users';
import messages from './messages';
import groups from './groups';
import config from '../config/database';

firebase.initializeApp(config);

module.exports = (app) => {
  users(app);
  groups(app);
  messages(app);
};
