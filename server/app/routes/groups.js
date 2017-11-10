import groupControllers from '../controllers/groups';
import tokenAuth from '../middlewares/tokenAuth';

export default (app) => {
  app.post('/group', tokenAuth, groupControllers.createGroup);
  app.post('/group/:groupId/user', tokenAuth, groupControllers.addMemberToGroup);
  app.get('/group/:groupId/users', tokenAuth, groupControllers.getUsersInGroups);
  app.get('/user/groups', tokenAuth, groupControllers.getUserGroups);
};
