import React from 'react';
import CreateGroup from './CreateGroup';
import PostItStore from '../../stores/PostItStore';
import PostItActions from '../../actions/PostItActions';
import Group from './Group';
import API from '../../Api';


/**
 * cretes grouplist components
 *
 * @class GroupList
 * @extends {React.Component}
 */
class GroupList extends React.Component {
  // componentDidMount() {
  //   API.getMessages(this.props.group);
  //   // PostItStore.getGroupsUser();
  // }
  render() {
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
}
export default GroupList;
