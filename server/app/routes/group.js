import GroupController from '../controllers/GroupController';
import tokenAuth from '../middlewares/tokenAuth';
import * as Validate from '../helpers/inputValidate';


export default (app) => {
  app.post('/group', Validate.createGroup, tokenAuth,
  GroupController.createGroup);

  app.post('/group/:groupId/user', Validate.addMemberToGroup,
   tokenAuth, GroupController.addMemberToGroup);

  app.get('/group/:groupId/users', tokenAuth,
  GroupController.getUsersInGroups);

  app.get('/user/groups', tokenAuth, GroupController.getUserGroups);
};
