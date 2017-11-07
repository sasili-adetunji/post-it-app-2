import messageControllers from '../controllers/messages';
import tokenAuth from '../middlewares/tokenAuth';

export default (app) => {
  app.post('/message', tokenAuth, messageControllers.message);
  app.get('/group/:groupId/messages', tokenAuth, messageControllers.userMessage);
  app.get('/group/:messageId/readUsers', tokenAuth, messageControllers.userReadMessage);
};
