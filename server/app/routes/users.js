
import userControllers from '../controllers/users';
import tokenAuth from '../middlewares/tokenAuth';


module.exports = (app) => {
  app.post('/user/signup', userControllers.signup);
  app.post('/user/signin', userControllers.signin);
  app.get('/user/signout', userControllers.signout);
  app.post('/user/reset', userControllers.resetPassword);
  app.get('/user/users', tokenAuth, userControllers.getUsersList);
  app.post('/user/google', userControllers.googleLogin);
};
