import React from 'react';


/**
 * @description Displays a list of users in a group
 *
 * @param  {object} user store user data passed to the component
 *
 * @function User
 *
 * @extends {Component}
 *
 * @returns {ReactElement} User markup
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
