// import firebase from 'firebase';
import user from './user';
import message from './message';
import group from './group';

module.exports = (app) => {
  user(app);
  group(app);
  message(app);
};
