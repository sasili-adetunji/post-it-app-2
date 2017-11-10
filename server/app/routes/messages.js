import messageControllers from '../controllers/messages';
import tokenAuth from '../middlewares/tokenAuth';

export default (app) => {
  app.post('/message', tokenAuth, messageControllers.postMessage);
  app.get('/group/:groupId/messages', tokenAuth,
  messageControllers.getUserMessages);
  app.get('/group/:messageId/readUsers', tokenAuth,
  messageControllers.getReadusers);
};
