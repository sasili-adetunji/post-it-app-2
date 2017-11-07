import groupControllers from '../controllers/groups';
import tokenAuth from '../middlewares/tokenAuth';

export default (app) => {
  app.post('/group', tokenAuth, groupControllers.group);
  app.post('/group/:groupId/user', tokenAuth, groupControllers.groupAdd);
  app.get('/group/:groupId/users', tokenAuth, groupControllers.usersInGroup);
  app.get('/user/groups', tokenAuth, groupControllers.userGroup);
};
