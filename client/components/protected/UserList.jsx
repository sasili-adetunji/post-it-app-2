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

const UserList = ({ users }) => {
   const userNodes = users.map((user, i) => {
    return (
      <User user={user} key={i}/>
    );
  });
  return (
    <div className='groupMembers'>
      <div className='groupList'>
        <h4 className='card-header'>Group Members </h4>
        {userNodes}
      </div>
    </div>
  );
}
export default UserList;
