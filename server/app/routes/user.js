
import userController from '../controllers/userController';
import tokenAuth from '../middlewares/tokenAuth';
import * as Validate from '../helpers/inputValidate';


module.exports = (app) => {
  app.post('/user/signup', Validate.signup, userController.signup);

  app.post('/user/signin', Validate.signin, userController.signin);

  app.get('/user/signout', userController.signout);

  app.post('/user/reset', Validate.resetPassword,
  userController.resetPassword);

  app.get('/user/users', tokenAuth, userController.getUsersList);

  app.post('/user/google', userController.googleLogin);
};
