import React from 'react';
import mui from 'material-ui';
import API from '../Api';
import Toggle from 'material-ui/Toggle';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';

import { ListItem } from 'material-ui/List';
import AddMember from './AddMember';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    const groupId = {
      groupId: this.props.group.groupId
    };
    PostItActions.groupOpened(this.props.group);
    API.getMessages(this.props.group);
  }

  render() {
    return (
      <div>
        <ListItem
        href={`/#/dashboard/groups/${this.props.group.groupId}`}
        onClick={this.onClick}
      >{this.props.group.groupname}</ListItem>
      </div>
    );
  }
}

export default Group;
