import React from 'react';
import User from './User';
import PostItStore from '../../stores/PostItStore';

/**
 * @description Displays a list of users in a group
 * 
 * @function UserList
 * 
 * @returns {JSX} list of a users in a group
 */

const UserList = () => {
  const userNodes = PostItStore.getUsersInGroup().map((user, i) => {
    return (
      <User user={user} key={i} />
    );
  });
  return (
    <div>
      <div className="headerlist"> <h4 className="card-header"> 
        Members </h4> </div>
      <div className="userList">
      {userNodes}
      </div>
    </div>
  );
}
export default UserList;
