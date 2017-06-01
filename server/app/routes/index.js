// import all the route into a single index file


import signup from './signup';
import signin from './signin';
import group from './group';
import groupAdd from './groupAdd';
import signout from './signout';


const index = (app, db) => {
  signup(app, db);
  signin(app, db);
  signout(app, db);
  group (app, db);
  groupAdd(app, db);

};
export default index;
