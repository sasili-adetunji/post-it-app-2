import MessageController from '../controllers/MessageController';
import tokenAuth from '../middlewares/tokenAuth';
import * as Validate from '../helpers/inputValidate';

export default (app) => {
  app.post('/message', Validate.postMessage, tokenAuth,
  MessageController.postMessage);

  app.get('/group/:groupId/messages', tokenAuth,
  MessageController.getUserMessages);

  app.get('/group/:messageId/readUsers', tokenAuth,
  MessageController.getReadusers);
};
