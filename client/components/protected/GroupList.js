import React from 'react';
import CreateGroup from './CreateGroup';
import PostItStore from '../../stores/PostItStore';
import Group from './Group';
import API from '../../Api';


/**
 * cretes grouplist components
 *
 * @class GroupList
 * @extends {React.Component}
 */
class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: PostItStore.getGroupsUser(),
    };
  }

  onChange() {
    this.setState({
      groups: PostItStore.getGroupsUser(),
    });
  }

  componentWillReceiveProps() {
    API.getUserGroups();
  }

  render() {
    let header = null;
    if (this.props.grou.length < 1) {
      header = (<h4> No Group yet </h4>);
    } else {
      header = (<h4 className="card-header"> My groups </h4>);
    }
    const groupNodes = this.props.grou.map((group, i) => {
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
