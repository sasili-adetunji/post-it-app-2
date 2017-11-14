import groupControllers from '../controllers/groups';
import tokenAuth from '../middlewares/tokenAuth';
import * as Validate from '../helpers/inputValidate';


export default (app) => {
  app.post('/group', Validate.createGroup, tokenAuth,
  groupControllers.createGroup);
  app.post('/group/:groupId/user', Validate.addMemberToGroup,
   tokenAuth, groupControllers.addMemberToGroup);
  app.get('/group/:groupId/users', tokenAuth,
  groupControllers.getUsersInGroups);
  app.get('/user/groups', tokenAuth, groupControllers.getUserGroups);
};
