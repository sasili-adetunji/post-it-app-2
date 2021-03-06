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
 * @class DashboardNAv
 * @extends {React.Component}
 */
class DashboardNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCreateGroup: false,
            showAddUser: false,

        };
        this.handleClick = this.handleClick.bind(this);
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
   * @description Makes an action call to signout a user
   * @param {object} event
   * @returns {void}
   * @memberof App
  */
  handleClick(event) {
    event.preventDefault();
    PostItActions.signOutUser();
  }

    /**
    * @method render
    * Render react component
    * 
    * @returns {String} The HTML markup for the DashboardNav Components
    * @memberof DashboardNav
    */
    render() {
      return (
        <div id="sidebar">
            <button id="logout" onClick={this.handleClick}>
                Log Out
            </button>
          <div className="card-block">
            <a onClick={this.openGroup} className="list-group-item createGroup">Create Group</a>
              <Modal show={this.state.showCreateGroup} onHide={this.closeGroup}>
                <Modal.Body>
                  <CreateGroup userName={this.props.loggedInUser} />
                </Modal.Body>
                <Modal.Footer>
                  <a onClick={this.closeGroup}> Close</a>
                </Modal.Footer>
              </Modal>
          </div>
          <div className="card-block">
            <GroupList selected={this.props.selectedGroup} />
          </div>
          <div className="card-block mem">
              <a onClick={this.openGroup1} className="list-group-item addUser">Add member</a>
                <Modal show={this.state.showAddUser} onHide={this.closeGroup1}>
                  <Modal.Body>
                    <AddMember selected={this.props.selectedGroup} usern={this.props.usernames} />
                  </Modal.Body>
                    <Modal.Footer>
                      <a onClick={this.closeGroup1}> Close</a>
                    </Modal.Footer>
                </Modal>
          </div>
          <div className="card-block">
          <UserList use={this.props.user} usern={this.props.usernames} />
          </div>
        </div>
        );
    }
}
export default DashboardNav;
