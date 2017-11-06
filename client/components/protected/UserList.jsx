import React from 'react';
import User from './User';
import PostItStore from '../../stores/PostItStore';


/**
 * creates userList components
 * @class UserList
 * @extends {React.Component}
 */
class UserList extends React.Component {

   /**
 * Displays the List of Users in a group
 * @param props 
 * @export
 * @class UserList
 * @extends {Component}
 */

  render() {
    const userNodes = PostItStore.getUsersInGroup().map((user, i) => {
      return (
        <User user={user} key={i} />
      );
    });
    return (
      <div>
        <div className="headerlist"> <h4 className="card-header"> Members </h4> </div>
        <div className="userList">
        {userNodes}
        </div>
      </div>
    );
  }
}
export default UserList;
