import React from 'react';
import PropTypes from 'prop-types';


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
      <li className="item glyphicon glyphicon-user">
        {user.userName} </li>
    </div>
  );

export default User;
