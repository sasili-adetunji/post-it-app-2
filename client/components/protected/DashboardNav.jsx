import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal } from 'react-bootstrap';
import API from '../../Api';
import PostItStore from '../../stores/PostItStore';
import CreateGroup from './CreateGroup';
import AddMember from './AddMember';
import GroupList from './GroupList';
import UserList from './UserList';
import MessageList from './MessageList';
/**
 * creates dashboard components
 *
 * @class Dashboard
 * @extends {React.Component}
 */
class DashboardNav extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      showCreateGroup: false,
      showAddUser: false,

    };
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
  render() {
    /**
      * renders the dashboard componets
      *
      * @returns { void }
      * @memberof Dashboard
      */
    return (
<div id="sidebar">
            <div className="card-block">
                    <a onClick={this.openGroup} className="list-group-item createGroup">Create Group</a>
                 <Modal show={this.state.showCreateGroup} onHide={this.closeGroup}>
                    <Modal.Body>
                         <CreateGroup userName={this.props.loggedInUser}/> 
                    </Modal.Body>
                    <Modal.Footer>
                        <a onClick={this.closeGroup}> Close</a>
                    </Modal.Footer>
                </Modal>
                    </div>
                <div className="card-block">
                   <GroupList selected={this.props.selectedGroup} grou={this.props.groups} /> 
                </div>
                                  <div className="card-block mem">
                    <a onClick={this.openGroup1} className="list-group-item addUser">Add member</a>
                 <Modal show={this.state.showAddUser} onHide={this.closeGroup1}>
                    <Modal.Body>
                    <AddMember {...this.state} selected={this.props.selectedGroup} usern={this.props.usernames} />  
                    </Modal.Body>
                    <Modal.Footer>
                        <a onClick={this.closeGroup1}> Close</a>
                    </Modal.Footer>
                </Modal>
                    </div>
                <div className="card-block">
                    <UserList {...this.state} use={this.props.user} usern={this.props.usernames} />  
                </div>
             </div>
                  );
  }
}
export default DashboardNav;
