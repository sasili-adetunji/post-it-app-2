import React from 'react';
import PostItActions from '../actions/PostItActions';


const NavBar = () => {
  /**
   * @description Makes an action call to signout a user
   *
   * @param {object} event
   *
   * @returns {void}
   *
   * @memberof NavBar
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
              <button
                className="btn btn-primary button"
                onClick={handleSignOut}
                id="navigationText"
              > Sign Out </button> : ''
                }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
