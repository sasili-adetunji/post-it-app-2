import React from 'react';
import mui from 'material-ui';
import API from '../Api';
import { ListItem } from 'material-ui/List';
import AddMember from './AddMember';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Group extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

 handleClick (){
  API.getMessages(this.props.group.groupId)
  console.log('my messages')
 }


  render(){
      return (
<div>
    <Table onCellClick={this.props.onCellClick}>
      <TableBody>
        <TableRow>
          <TableRowColumn> {this.props.group.groupId} </TableRowColumn>
          <TableRowColumn> {this.props.group.groupname} </TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
</div>
    );
  }
}

export default Group;