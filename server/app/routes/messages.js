import messageControllers from '../controllers/messages';
import tokenAuth from '../middlewares/tokenAuth';
import * as Validate from '../helpers/inputValidate';

export default (app) => {
  app.post('/message', Validate.postMessage, tokenAuth,
  messageControllers.postMessage);
  app.get('/group/:groupId/messages', tokenAuth,
  messageControllers.getUserMessages);
  app.get('/group/:messageId/readUsers', tokenAuth,
  messageControllers.getReadusers);
};
