


import register from './register';
import login from './login';
import signout from './signout';
import group from './group';
import groupAdd from './groupAdd';


const index = (app, db) => {
  register(app, db);
  login(app, db);
  signout(app, db);
  group (app, db);
  groupAdd(app, db);

};
export default index;