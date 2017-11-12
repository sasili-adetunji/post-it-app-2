import React from 'react';

/**
 * @description Displays a list of users in a group
 * 
 * @function User
 * 
 * @returns {JSX} each users in a group
 */

const User = ({ user }) => {
  return (
    <div className="list-group-item">
      <li className='item glyphicon glyphicon-user'> <span />
        <b> {user.userName} </b> </li>
    </div>
  );
}
export default User;
