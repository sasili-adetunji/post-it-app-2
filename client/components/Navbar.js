import React from 'react';
import { Navlink } from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		return (
			<div>
        <ul>
          <li>
            <Navlink to="/">Home</Navlink>
          </li>
          <li>
             <Navlink to="/dashboard">Dashboard</Navlink>
           </li> 
            <li>
              <Navlink to="/user/signin">Login</Navlink> 
            </li>  
            <li>
              <Navlink to="/user/signup">Register</Navlink>
            </li>
           </ul>
        </div>
        )
	}
}

export default Navbar;

