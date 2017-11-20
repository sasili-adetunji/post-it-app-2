import React from 'react';


/**
 * @description Displays a list of users in a group
 *
 * @function User
 *
 * @returns {JSX} each users in a group
 */

const User = ({ user }) =>
  (
    <div className="list-group-item">
      <li className="item">
        <span className="glyphicon glyphicon-user" />
        &nbsp;{user.userName} </li>
    </div>
  );

export default User;
