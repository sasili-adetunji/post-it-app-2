
import userControllers from '../controllers/users';
import tokenAuth from '../middlewares/tokenAuth';
import * as Validate from '../helpers/inputValidate';


module.exports = (app) => {
  app.post('/user/signup', Validate.signup, userControllers.signup);
  app.post('/user/signin', Validate.signin, userControllers.signin);
  app.get('/user/signout', userControllers.signout);
  app.post('/user/reset', Validate.resetPassword,
  userControllers.resetPassword);
  app.get('/user/users', tokenAuth, userControllers.getUsersList);
  app.post('/user/google', userControllers.googleLogin);
};
