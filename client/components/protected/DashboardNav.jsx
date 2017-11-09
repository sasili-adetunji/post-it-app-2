import React from 'react';
import { Modal } from 'react-bootstrap';
import * as API from '../../Api';
import PostItStore from '../../stores/PostItStore';
import CreateGroup from './CreateGroup';
import AddMember from './AddMember';
import GroupList from './GroupList';
import UserList from './UserList';
import MessageList from './MessageList';
import PostItActions from '../../actions/PostItActions';


/**
 * creates DashboardNav components
 *
 * @class DashboardNav
 * 
 * @extends {React.Component}
 */
class DashboardNav extends React.Component {
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
    this.handleClick = this.handleClick.bind(this);
    this.closeGroup = this.closeGroup.bind(this);
    this.openGroup = this.openGroup.bind(this);
    this.closeGroup1 = this.closeGroup1.bind(this);
    this.openGroup1 = this.openGroup1.bind(this);
    }

    onChange() {
    this.setState({
      users: PostItStore.getUsersInGroup(),
      selectedGroup: PostItStore.getOpenedGroup(),
      groups: PostItStore.getGroupsUser(),
      readUsers: PostItStore.getReadUsers(),
      message: PostItStore.getGroupsMessages()
    });
  }


/**
 * @method componentDidUnmount
 * 
 * @description adds event Listener from the Store, 
 * fetches API call to get users and user groups
 * 
 * @memberof GroupList
*/
  componentDidMount() {
    PostItStore.addChangeListener(this.onChange);
  }


  /**
   * @method componentWillUnmount
   * 
   * @description removes event Listener from the Store
   * 
   * @memberof GroupList
  */

  componentWillUnmount() {
    PostItStore.removeChangeListener(this.onChange);
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
   * @description Makes an action call to signout a user
   * 
   * @param {object} event
   * 
   * @returns {void}
   * 
   * @memberof DashboardNav
  */
  handleClick(event) {
    event.preventDefault();
    PostItActions.signOutUser();
  }


    /**
    * @method render
    *
    * Render react component
    * 
    * @returns {String} The HTML markup for the DashboardNav Components
    *
    * @memberof DashboardNav
    */
    render() {
      return (
        <div id="sidebar">
          <button id="logout" onClick={this.handleClick}>
            Log Out
          </button>
          <div className="card-block">
            <a onClick={this.openGroup} className="list-group-item createGroup">
              Create Group</a>
              <Modal show={this.state.showCreateGroup} onHide={this.closeGroup}>
                <Modal.Body>
                  <CreateGroup />
                </Modal.Body>
                <Modal.Footer>
                  <a onClick={this.closeGroup}> Close</a>
                </Modal.Footer>
              </Modal>
          </div>
          <div className="card-block">
            <GroupList />
          </div>
          <div className="card-block mem">
              <a onClick={this.openGroup1} className="list-group-item addUser">
                Add member</a>
                <Modal show={this.state.showAddUser} onHide={this.closeGroup1}>
                  <Modal.Body>
                    <AddMember />
                  </Modal.Body>
                    <Modal.Footer>
                      <a onClick={this.closeGroup1}> Close</a>
                    </Modal.Footer>
                </Modal>
          </div>
          <div className="card-block">
          <UserList use = {this.props.user} />
          </div>
        </div>
        );
    }
}
export default DashboardNav;
