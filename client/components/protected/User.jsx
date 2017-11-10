import React from 'react';

/**
 * @description Displays a list of users in a group
 * 
 * @function User
 * 
 * @returns {JSX} each users in a group
 */

const User = ({user}) => {
  return (
    <div className="side-menu-container list-group-item">
      <li><span />
        <b> {user.userName} </b> </li>
    </div>
  );
}
export default User;
