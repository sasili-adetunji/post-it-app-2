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


class Message extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
        console.log(this.props.message);

    return (
  <div>
      <Table>
        <TableBody> 
          <TableRow>
            <TableRowColumn> {this.props.message.messageId} </TableRowColumn>
            <TableRowColumn> {this.props.message.messageText} </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
  </div>
    );
  }
}

export default Message;