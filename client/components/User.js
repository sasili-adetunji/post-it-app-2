import React from 'react';
import mui from 'material-ui';
import API from '../Api';
import { ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'




class User extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
      console.log('user-------',this.props.user)


    return (
      <div>
      <MuiThemeProvider >
      <ListItem
      href={'/#/dashboard/' + this.props.user.userId}
      >
        {this.props.user.username}

      </ListItem>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default User;