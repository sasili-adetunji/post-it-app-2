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
    if (this.props.groups.length < 1) {
      header = (<h4> No Group yet </h4>);
    } else {
      header = (<h4> My groups </h4>);
    }
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
        <div className="headerlist"> {header} </div>
        {groupNodes}
      </div>
    );
  }
}
export default GroupList;
