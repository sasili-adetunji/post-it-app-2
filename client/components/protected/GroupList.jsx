import React from 'react';
import PostItStore from '../../stores/PostItStore';
import Group from './Group';

/**
 * @description Displays a list of groups a user belongs to
 * 
 * @function GroupList
 * 
 * @returns {JSX} list of groups a user belongs
 */

const GroupList = () => {
    let header = null;
    if (PostItStore.getGroupsUser().length < 1) {
      header = (<h4> No Group yet </h4>);
    } else {
      header = (<h4 className="card-header"> My groups </h4>);
    }
    const groupNodes = PostItStore.getGroupsUser().map((group, i) => {
      return (
        <Group group={group} key={i} />
      );
    });
    return (
      <div>
        <div className="headerlist"> {header} </div>
        <div className="groupList">
          {groupNodes}
        </div>
      </div>
    );
}
export default GroupList;
