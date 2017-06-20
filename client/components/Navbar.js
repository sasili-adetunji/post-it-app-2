import React from 'react';
import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <ul className = 'nav'>
     <li>
       <NavLink exact activeClassName='active' to='/user/signin'>
         Sign In
       </NavLink>
     </li>

      <li>
        <NavLink activeClassName='active' to='/user/signup'>
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/dashboard'>
          Dashboard
        </NavLink>
      </li>
      <li>
                  {this.state.authed
                    ? <button className = "logout"
                        onClick={() => {
                          signOut()
                        }}> Logout</button>
                    : <span>
                        <NavLink to="/user/signin">Login</NavLink> 
                        

                        <NavLink to="/user/signup">Register</NavLink>
                      </span> }
                </li>
    </ul>
    );
}
module.exports = Navbar;


