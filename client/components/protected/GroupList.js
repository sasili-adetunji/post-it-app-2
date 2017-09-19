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
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({
      groups: PostItStore.getGroupsUser(),
    });
  }

  componentDidMount() {
    PostItStore.addChangeListener(this.onChange);
  }
  componentWillReceiveProps() {
    API.getUserGroups();
  }

  componentUnmount() {
    PostItStore.removeChangeListener(this.onChange);
  }

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
        <div className="headerlist"> <h4> My groups </h4> </div>
        {groupNodes}
      </div>
    );
  }
}
export default GroupList;
