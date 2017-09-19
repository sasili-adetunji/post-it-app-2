import React from 'react';
import { Link } from 'react-router-dom';
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
    API.getMessages(this.props.group);
    PostItActions.groupOpened(this.props.group);
    API.getUsersInGroup(this.props.group);
    API.getUserGroups();

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
        <a> <li onClick={this.onClick}>
         <b> { this.props.group.groupName } </b>
        </li> </a>
      </div>
    );
  }
}
export default Group;
