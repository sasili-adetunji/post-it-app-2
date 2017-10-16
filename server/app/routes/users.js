
import userControllers from '../controllers/users';

module.exports = (app) => {
  app.post('/user/signup', (req, res) => {
    userControllers.signup(req, res);
  });
  app.post('/user/signin', (req, res) => {
    userControllers.signin(req, res);
  });
  app.get('/user/signout', (req, res) => {
    userControllers.signout(req, res);
  });
  app.post('/user/reset', (req, res) => {
    userControllers.resetPassword(req, res);
  });
  app.get('/user/users', (req, res) => {
    userControllers.usersList(req, res);
  });
  app.get('/user/google', (req, res) => {
    userControllers.googleLogin(req, res);
  });
};
