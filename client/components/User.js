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
         <ListItem
        href={'/#/dashboard/users' + this.props.user.userId}
      > {this.props.user.username} </ListItem>
      </div>
      );
  }
}

export default User;