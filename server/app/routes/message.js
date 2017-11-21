import messageController from '../controllers/messageController';
import tokenAuth from '../middlewares/tokenAuth';
import * as Validate from '../helpers/inputValidate';

export default (app) => {
  app.post('/message', Validate.postMessage, tokenAuth,
  messageController.postMessage);

  app.get('/group/:groupId/messages', tokenAuth,
  messageController.getUserMessages);

  app.get('/group/:messageId/readUsers', tokenAuth,
  messageController.getReadusers);
};
