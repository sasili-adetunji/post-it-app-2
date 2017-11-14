import React from 'react';


/**
 * @description Displays a list of users in a group
 *
 * @function WelcomeHeader
 *
 * @param {Object} user user details as props
 *
 * @returns {JSX} list of a users in a group
 */

const WelcomeHeader = ({ user }) => {
  return (
    <div>
     <h4> Welcome {user.data.userName} </h4>
    </div>
  );
};
export default WelcomeHeader;

