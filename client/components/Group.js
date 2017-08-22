import React from 'react';
import mui from 'material-ui';
import { ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';
import AddMember from './AddMember';
import API from '../Api';


/**
 * Group components
 * @class Group
 * @extends {React.Component}
 */
class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  /**
   * makes an action call to group opened and an API call to get messages
   *
   * @memberof Group
   */
  onClick() {
    const groupId = {
      groupId: this.props.group.groupId
    };
    PostItActions.groupOpened(this.props.group);
    API.getMessages(this.props.group);
    API.getUsersInGroup(this.props.group);
    API.getUsers();
  }

  /**
   * renders the group components
   *
   * @returns {void}
   * @memberof Group
   */
  render() {
    return (
      <MuiThemeProvider>
        <ListItem
        href={`/#/dashboard/groups/${this.props.group.groupId}`}
        onClick={this.onClick}>
          {this.props.group.groupname}
        </ListItem>
      </MuiThemeProvider>

    );
  }
}

export default Group;
