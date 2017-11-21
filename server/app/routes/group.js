import groupController from '../controllers/groupController';
import tokenAuth from '../middlewares/tokenAuth';
import * as Validate from '../helpers/inputValidate';


export default (app) => {
  app.post('/group', Validate.createGroup, tokenAuth,
  groupController.createGroup);

  app.post('/group/:groupId/user', Validate.addMemberToGroup,
   tokenAuth, groupController.addMemberToGroup);

  app.get('/group/:groupId/users', tokenAuth,
  groupController.getUsersInGroups);

  app.get('/user/groups', tokenAuth, groupController.getUserGroups);
};
