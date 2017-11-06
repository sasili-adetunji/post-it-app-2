import groupControllers from '../controllers/groups';

export default (app) => {
  app.post('/group', (req, res) => {
    groupControllers.group(req, res);
  });
  app.post('/group/:groupId/user', (req, res) => {
    groupControllers.groupAdd(req, res);
  });
  app.get('/group/:groupId/users', (req, res) => {
    groupControllers.usersInGroup(req, res);
  });
  app.get('/user/groups', (req, res) => {
    groupControllers.userGroup(req, res);
  });
};
