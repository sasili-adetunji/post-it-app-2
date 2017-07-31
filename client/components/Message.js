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
    return (
  <div>
      <ListItem>
      {this.props.message.messageText} - {this.props.message.isRead} 
      </ListItem>
  </div>
    );
  }
}

export default Message;