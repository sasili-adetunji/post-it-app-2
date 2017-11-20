import React from 'react';
import PostItActions from '../../actions/PostItActions';
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

const Group = ({ group }) => {
  const onClick = () => {
    PostItActions.groupOpened(group);
    PostItActions.getUserMessages(group);
    PostItActions.recieveUsersInGroups(group);
    API.getUsersInGroup(group);
  };
  return (
    <div className="list-group-item" id="groupList">
      <li className="item" onClick={onClick}>
        { group.groupName }
      </li>
    </div>
  );
};
export default Group;

