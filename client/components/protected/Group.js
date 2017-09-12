import React from 'react';
import MessageList from './MessageList';
import PostItActions from '../../actions/PostItActions';
import PostItStore from '../../stores/PostItStore';
import AddMember from './AddMember';
import API from '../../Api';


/**
 * creates Group components
 *
 * @class Group
 * @extends {React.Component}
 */
class Group extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const groupId = {
      groupId: this.props.group.groupId,
      messageId: this.props.MessageId
    };
    API.getMessages(this.props.group);
    PostItActions.groupOpened(this.props.group);
    API.getUsersInGroup(this.props.group);
    API.getUsers();
  }
  /**
   * renders group componenets
   *
   * @returns { void }
   * @memberof Group
   */
  render() {
    return (
      <div className="side-menu-container">
          <li onClick={this.onClick}>
            { this.props.group.groupName }
          </li>
        </div>
    );
  }
}
export default Group;
