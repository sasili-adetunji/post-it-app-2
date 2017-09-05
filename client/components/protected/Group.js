import React from 'react';
import MessageList from './MessageList';
import PostItActions from '../../actions/PostItActions';
import PostItStore from '../../stores/PostItStore';
import AddMember from './AddMember';
import API from '../../Api';

/**
 * Group components
 * @class Group
 * @extends {React.Component}
 */
class Group extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  /**
   * renders the group components
   *
   * @returns {void}
   * @memberof Group
   */
  onClick() {
    const groupId = {
      groupId: this.props.group.groupId
    };
    API.getMessages(this.props.group);
    PostItActions.groupOpened(this.props.group);
    API.getUsersInGroup(this.props.group);
    API.getUsers();
  }
  render() {
    return (
      <div className="side-menu-container">
          <li onClick={this.onClick}>
            { this.props.group.groupname }
          </li>
      </div>
    );
  }
}
export default Group;
