import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal } from 'react-bootstrap';
import API from '../../Api';
import PostItStore from '../../stores/PostItStore';
import GroupList from './GroupList';
import UserList from './UserList';
import MessageList from './MessageList';
import CreateGroup from './CreateGroup';
import AddMember from './AddMember';
import MessageBox from './MessageBox';
import DashboardNav from './DashboardNav';


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
      showCreateGroup: false,
      showAddUser: false,
      loggedInUser: PostItStore.getLoggedInUser(),
      groups: PostItStore.getGroupsUser(),
      messages: PostItStore.getMessages(),
      users: PostItStore.getUsersInGroup(),
      selectedGroup: PostItStore.getOpenedGroup(),
      user: PostItStore.getUsers(),
      readUsers: PostItStore.getReadUsers(),

    };
    this.onChange = this.onChange.bind(this);
    this.closeGroup = this.closeGroup.bind(this);
    this.openGroup = this.openGroup.bind(this);
    this.closeGroup1 = this.closeGroup1.bind(this);
    this.openGroup1 = this.openGroup1.bind(this);
  }
  closeGroup() {
    this.setState({ showCreateGroup: false });
  }
  openGroup() {
    this.setState({ showCreateGroup: true });
  }
  closeGroup1() {
    this.setState({ showAddUser: false });
  }
  openGroup1() {
    this.setState({ showAddUser: true });
  }
  onChange() {
    this.setState({
      loggedInUser: PostItStore.getLoggedInUser(),
      groups: PostItStore.getGroupsUser(),
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
    /**
      * renders the dashboard componets
      *
      * @returns { void }
      * @memberof Dashboard
      */
    return (
        <div className="container-fluid" id="html">
            <div className="col-xs-3" id="dash">
             <DashboardNav
            user={this.state.users} usernames={this.state.user} userName={this.state.loggedInUser} 
            selectedGroup={this.state.selectedGroup}
            groups={this.state.groups} loggedInUser={this.state.loggedInUser}
             /> 
             </div>
            <div className="col-xs-9">
                <MessageList  {...this.state} selectedGroup={this.state.selectedGroup}
              readUsers={this.state.readUsers} />
            </div>
        </div>
    );
  }
}
export default Dashboard;
