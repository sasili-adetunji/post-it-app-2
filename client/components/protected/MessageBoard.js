import React from 'react';
import API from '../../Api';
import PostItStore from '../../stores/PostItStore';
import GroupList from './GroupList';
import UserList from './UserList';
import MessageList from './MessageList';


/**
 * creates dashboard components
 * 
 * @class Dashboard
 * @extends {React.Component}
 */
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: PostItStore.getLoggedInUser(),
      groups: PostItStore.getUserGroups(),
      messages: PostItStore.getMessages(),
      users: PostItStore.getUsersInGroup(),
      selectedGroup: PostItStore.getOpenedGroup(),
      user: PostItStore.getUsers(),
      readUsers: PostItStore.getReadUsers(),

    };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({
      loggedInUser: PostItStore.getLoggedInUser(),
      groups: PostItStore.getUserGroups(),
      messages: PostItStore.getMessages(),
      users: PostItStore.getUsersInGroup(),
      selectedGroup: PostItStore.getOpenedGroup(),
      user: PostItStore.getUsers(),
      readUsers: PostItStore.getReadUsers()
    });
  }

  componentDidMount() {
    API.getUserGroups();
    API.getUsers();
    PostItStore.addChangeListener(this.onChange);
  }

  componentUnmount() {
    PostItStore.removeChangeListener(this.onChange);
  }
  render() {
    console.log(this.state)
 /**
   * renders the dashboard componets
   *
   * @returns { void }
   * @memberof Dashboard
   */
    return (
      <div>
        <div><h5> Welcome {this.state.loggedInUser.displayName} </h5></div>
        <div className="row">
          <div className="col-md-3">
            <GroupList
              {...this.state} loggedInUser={this.state.loggedInUser}
              groups={this.state.groups} />
          </div>
          <div className="col-md-6">
            <MessageList
              {...this.state} loggedInUser={this.state.loggedInUser}
              readUsers={this.state.readUsers} />
          </div>
          <div className="col-md-3" id="" >
            <UserList {...this.state} user={this.state.users} usernames={this.state.user} />
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
