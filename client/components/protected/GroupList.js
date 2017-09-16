import React from 'react';
import CreateGroup from './CreateGroup';
import PostItStore from '../../stores/PostItStore';
import Group from './Group';


/**
 * cretes grouplist components
 *
 * @class GroupList
 * @extends {React.Component}
 */
class GroupList extends React.Component {
  render() {
    const groupNodes = this.props.groups.map((group, i) => {
      return (
        <Group group={group} key={i} />
      );
    });
    return (
      <div className="">
        <div>
          <CreateGroup userName={this.props.loggedInUser} />
        </div>
        <div className="headerlist"> <h5> My groups </h5> </div>
        {groupNodes}
      </div>
    );
  }
}
export default GroupList;
