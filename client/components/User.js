import React from 'react';
import mui from 'material-ui';
import API from '../Api';
import { ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class User extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
  <div>
    <MuiThemeProvider >
      <Table>
        <TableBody> 
          <TableRow>
            <TableRowColumn> {this.props.user.userId} </TableRowColumn>
            <TableRowColumn> {this.props.user.username} </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </MuiThemeProvider>
  </div>
    );
  }
}

export default User;