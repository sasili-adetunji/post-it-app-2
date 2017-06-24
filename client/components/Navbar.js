import React from 'react';
import { NavLink } from 'react-router';



function Navbar() {
  return (
  <div className="container-fluid navbar navbar-default">
    <div className="navbar-header">

    <ul className='nav navbar-nav'>
    <div className='container-fluid'>
    <div className='navbar-header'>
     <li>
       <NavLink exact activeClassName='active' to='/signin'>
         Sign In
       </NavLink>
     </li>
      <li>
        <NavLink activeClassName='active' to='/signup'>
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/dashboard'>
          Dashboard
        </NavLink>
      </li>
      </div>
      </div>
      </ul>
      </div>
      </div>
    );
}
module.exports = Navbar;


