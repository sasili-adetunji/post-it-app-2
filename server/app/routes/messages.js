import messageControllers from '../controllers/messages';

export default (app) => {
  app.post('/message', (req, res) => {
    messageControllers.message(req, res);
  });
  app.get('/group/:groupId/messages', (req, res) => {
    messageControllers.userMessage(req, res);
  });
  app.get('/group/:messageId/readUsers', (req, res) => {
    messageControllers.userReadMessage(req, res);
  });
};
