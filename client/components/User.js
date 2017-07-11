import React from 'react';
import mui from 'material-ui';
import API from '../Api';
import { ListItem } from 'material-ui/List';




class User extends React.Component {
  constructor(props){
    super(props);
  }

  onClick(){
    API.getUsersNotInGroups(this.props.group);
  }

  render(){
    if(this.props.user.selected){
      style.backgroundColor = '#f0f0f0';
    }

    return (
      <ListItem
      href={'/#/dashboard/' + this.props.user.key}
      key={this.props.user.key}
 >
        {this.props.user.username}

      </ListItem>
    );
  }
}

export default User;