import React from 'react';
import API from '../../Api';
import PostItStore from '../../stores/PostItStore';
import GroupList from './GroupList';
import UserList from './UserList';
import MessageList from './MessageList';

function getAppState() {
  return {
    loggedInUser: PostItStore.getLoggedInUser(),
    groups: PostItStore.getUserGroups(),
    messages: PostItStore.getMessages(),
    users: PostItStore.getUsersInGroup(),
    selectedGroup: PostItStore.getOpenedGroup(),
    user: PostItStore.getUsers(),

  };
}

/**
 * Dashboard component.
 * @returns {void} The markup for the Dashboard component
 */
class Dashboard extends React.Component {
  /**
   * Creates an instance of Dashboard and renders the components
   * @memberOf Dashboard
   * @returns {void} The markup for the Dashboard
  */
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: PostItStore.getLoggedInUser(),
      groups: PostItStore.getUserGroups(),
      messages: PostItStore.getMessages(),
      users: PostItStore.getUsersInGroup(),
      selectedGroup: PostItStore.getOpenedGroup(),
      user: PostItStore.getUsers(),
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState(getAppState());
  }
  /**
   * adds change listener, get users and usergroups from API
   * @memberof DashContainer
   */
  componentDidMount() {
    API.getUserGroups();
    // API.getUsersInGroup();
    API.getUsers();

    PostItStore.addChangeListener(this.onChange);
  }
  /**
   * removes changelistener
   * @memberof DashContainer
   */
  componentUnmount() {
    PostItStore.removeChangeListener(this.onChange);
  }
  render() {
    console.log(this.props, '---???');
    return (
      <div className="container">
        <h5> Welcome {this.state.loggedInUser.displayName} </h5>
        <div className="row col-md-3">
          <GroupList {...this.state} />
          <div>
            <div className="side-body col-md-6">
              <MessageList {...this.state} />
            </div>
          </div>
        </div>
        <div className="row col-md-3" id="leftsidenav" >
          <UserList {...this.state} />
        </div>
      </div>
    );
  }
}
export default Dashboard;
