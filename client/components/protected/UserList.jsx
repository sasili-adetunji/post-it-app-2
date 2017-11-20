import React from 'react';
import User from './User';

/**
 * @description Displays a list of users in a group
 *
 * @function UserList
 *
 * @returns {JSX} list of a users in a group
 */

const UserList = ({ users }) => {
  const userNodes = users.map((user, i) => (
    <User user={user} key={i} />
    ));
  const header = (<div> <h4 className="card-header"> Group Members </h4>
  </div>);
  return (
    <div className="groupMembers">
      <h4> { header } </h4>
      <div className="groupList">
        {userNodes}
      </div>
    </div>
  );
};
export default UserList;

