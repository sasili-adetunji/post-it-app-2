import firebase from 'firebase';
import user from './user';
import message from './message';
import group from './group';
import config from '../config/database';

firebase.initializeApp(config);

module.exports = (app) => {
  user(app);
  group(app);
  message(app);
};
