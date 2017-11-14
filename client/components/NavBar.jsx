import React from 'react';
import PostItStore from '../stores/PostItStore';
import PostItActions from '../actions/PostItActions';

import { Link } from 'react-router-dom';


const NavBar = () => {
      /**
   * @description Makes an action call to signout a user
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof DashboardNav
  */
  const handleSignOut = (event) => {
    event.preventDefault();
    PostItActions.signOutUser();
  };
  return (
    <nav className="navbar navbar-default" id="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" id="navigationText">POST IT</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            { (localStorage.jwtToken) ?
              <li onClick={handleSignOut} id="navigationText"> Sign Out </li> :
              <li><a href href="/#/signup">Sign Up</a> </li>
                }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
