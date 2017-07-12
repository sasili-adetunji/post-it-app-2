import React from 'react';
import mui from 'material-ui';
import API from '../Api';
import { ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



class Group extends React.Component {
  constructor(props){
    super(props);
  }

 

  onClick(){
    API.getUserGroups(this.props);
  }

  render(){
  console.log('group-------',this.props.group)

      return (
           <div>
      <MuiThemeProvider >
      <ListItem 
        href={'/#/dashboard/' + this.props.group.groupId}
        >
        {this.props.group.groupname}
      </ListItem>
  </MuiThemeProvider >
  </div>
    );
  }
}

export default Group;