import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal } from 'react-bootstrap';
import * as API from '../../Api';
import PostItStore from '../../stores/PostItStore';
import PostItActions from '../../actions/PostItActions';
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
      // groups: PostItStore.getGroupsUser(),
      users: PostItStore.getUsersInGroup(),
      selectedGroup: PostItStore.getOpenedGroup(),
      user: PostItStore.getUsers(),
      // readUsers: PostItStore.getReadUsers(),
      // message: PostItStore.getGroupsMessages(),
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

  /**
      * @method onChange
      * @description Monitors changes in the components and change the state
      * @memberof Dashboard
      * @param {object}
      * @returns {void}
      */

  onChange() {
    this.setState({
      loggedInUser: PostItStore.getLoggedInUser(),
      // groups: PostItStore.getGroupsUser(),
      users: PostItStore.getUsersInGroup(),
      selectedGroup: PostItStore.getOpenedGroup(),
      user: PostItStore.getUsers(),
      // readUsers: PostItStore.getReadUsers(),
      // message: PostItStore.getGroupsMessages()
    });
  }

  /**
     * @method componentDidUnmount
     * @description adds event Listener from the Store, fetches API call to get users and user groups
     * @memberof MessageList
    */
  componentDidMount() {
    API.getUserGroups();
    API.getUsers();
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
  * @returns {String} The HTML markup for the MessageList Components
  * @memberof Dashboard
  */
  render() {
    return (
      <div className="container-fluid" id="html">
        <div className="col-xs-3" id="dash">
          <DashboardNav
            user={this.state.users} usernames={this.state.user} userName={this.state.loggedInUser}
            selectedGroup={this.state.selectedGroup} loggedInUser={this.state.loggedInUser}
          />
        </div>
        <div className="col-xs-9">
          <MessageList selectedGroup={this.state.selectedGroup} loggedInUser={this.state.loggedInUser}
            readUsers={this.state.readUsers} message={this.state.message} />
        </div>
      </div>
    );
  } 
}
export default Dashboard;
