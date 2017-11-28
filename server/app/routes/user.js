
import UserController from '../controllers/UserController';
import tokenAuth from '../middlewares/tokenAuth';
import * as Validate from '../helpers/inputValidate';


module.exports = (app) => {
  app.post('/user/signup', Validate.signup, UserController.signup);

  app.post('/user/signin', Validate.signin, UserController.signin);

  app.get('/user/signout', UserController.signout);

  app.post('/user/reset', Validate.resetPassword,
  UserController.resetPassword);

  app.get('/user/users', tokenAuth, UserController.getUsersList);

  app.post('/user/google', UserController.googleLogin);
};
