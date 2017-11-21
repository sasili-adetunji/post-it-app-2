import React from 'react';


/**
 * @description the header on the dashboard
 *
 * @function WelcomeHeader
 *
 * @extends {Component}
 *
 * @param {Object} user user details as props
 *
 * @return { ReactElement } rendered WelcomeHeader markup
 */

const WelcomeHeader = ({ user }) =>
  (
    <div>
      <h4> Welcome {user.data.userName} </h4>
    </div>
  );
export default WelcomeHeader;
