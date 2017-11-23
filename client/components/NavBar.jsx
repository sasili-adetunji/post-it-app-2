import React from 'react';
import AppActions from '../actions/AppActions';

/**
 * @description Navigation Component gives shows the logo and signout button
 * when authenticated
 *
 * @extends {Component}
 */

const NavBar = () => {
  /**
   * @description Makes an action call to signout a user
   *
   * @param {SyntheticEvent} event
   *
   * @returns {void}
   *
   * @memberof NavBar
  */
  const handleSignOut = (event) => {
    event.preventDefault();
    AppActions.signOutUser();
  };
  return (
    <nav className="navbar navbar-inverse">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <p className="navbar-brand"> POST IT</p>
      </div>
      <div className="collapse navbar-collapse myNavbar" id="myNavbar">
        <ul className="nav navbar-nav navbar-right">
          {(localStorage.jwtToken) ?
            <button
              className="btn btn-primary button"
              onClick={handleSignOut}
              id="navigationText"
            > Sign Out </button> : ''
          }
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
