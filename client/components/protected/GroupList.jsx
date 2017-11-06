import React from 'react';
import CreateGroup from './CreateGroup';
import PostItStore from '../../stores/PostItStore';
import PostItActions from '../../actions/PostItActions';
import Group from './Group';
import * as API from '../../Api';


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
      showCreateGroup: false,
      showAddUser: false,
      loggedInUser: PostItStore.getLoggedInUser(),
      groups: PostItStore.getGroupsUser(),
      users: PostItStore.getUsersInGroup(),
      selectedGroup: PostItStore.getOpenedGroup(),
      user: PostItStore.getUsers(),
      readUsers: PostItStore.getReadUsers(),
      message: PostItStore.getGroupsMessages(),
    };
    this.onChange = this.onChange.bind(this);
    }

    onChange() {
    this.setState({
      users: PostItStore.getUsersInGroup(),
      selectedGroup: PostItStore.getOpenedGroup(),
      readUsers: PostItStore.getReadUsers(),
      message: PostItStore.getGroupsMessages()
    });
  }

/**
   * @method componentDidUnmount
   * @description adds event Listener from the Store, fetches API call to get users and user groups
   * @memberof MessageList
  */
  componentDidMount() {
    PostItStore.addChangeListener(this.onChange);
  }
  /**
   * @method componentWillUnmount
   * @description removes event Listener from the Store
   * @memberof Dashboard
  */

  componentWillUnmount() {
    PostItStore.removeChangeListener(this.onChange);
  }


    /**
   * @method render
   * Render react component
   * 
   * @returns {String} The HTML markup for the GroupList Components
   * @memberof GroupList
   */
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
