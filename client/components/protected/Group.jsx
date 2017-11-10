import React from 'react';
import PostItActions from '../../actions/PostItActions';
import PostItStore from '../../stores/PostItStore';
import * as API from '../../Api';

/**
 * @description Displays a list of users in a group
 * 
 * @function UserList
 * 
 * @param {Object} group group details as props
 * 
 * @returns {JSX} list of a users in a group
 */

const Group = ({group}) => {
  const onClick = () => {
    PostItActions.groupOpened(group);
    PostItActions.getUserMessages(group);
    PostItActions.recieveUsersInGroups(group);
    API.getUsersInGroup(group);
  }
  return (
    <div className="side-menu-container list-group-item">
      <a> <li onClick={onClick}>
        <b> { group.groupName } </b>
      </li> </a>
    </div>
  );
}
export default Group;
