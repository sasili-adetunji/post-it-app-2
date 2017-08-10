// import all the route into a single index file
import signup from './signup';
import signin from './signin';
import group from './group';
import groupAdd from './groupAdd';
import signout from './signout';
import message from './message';
import groupList from './groupList';
import usersList from './usersList';
import userGroup from './userGroup';
import userMessage from './userMessage';
import googleLogin from './googleLogin';
import resetPassword from './resetPassword';


const index = (app) => {
  signup(app);
  signin(app);
  signout(app);
  group(app);
  message(app);
  groupAdd(app);
  usersList(app);
  groupList(app);
  userMessage(app);
  userGroup(app);
  googleLogin(app);
  resetPassword(app);
};
export default index;
