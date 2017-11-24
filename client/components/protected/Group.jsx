import React from 'react';
import AppActions from '../../actions/AppActions';
import * as Api from '../../api/AppApi';


/**
 * @description Displays a list of users in a group
 *
 * @function Groups
 *
 * @param {Object} group group details as props
 *
 * @returns {ReactElement}  Group markup  Components
 */
const Group = ({ group }) => {
  const onClick = () => {
    AppActions.groupOpened(group);
    AppActions.getUserMessages(group);
    AppActions.recieveUsersInGroups(group);
    localStorage.setItem('selectedGroupId', JSON.stringify(group));
    Api.getUsersInGroup(group);
    Api.getMessages(group);
  };
  return (
    <div className="list-group-item" id="groupList">
      <li className="item" onClick={onClick}>
        {group.groupName}
      </li>
    </div>
  );
};
export default Group;

