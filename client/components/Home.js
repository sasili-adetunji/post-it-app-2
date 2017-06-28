import React, { Component } from 'react';
import mui from 'material-ui';


var {
    Menu,
    MenuItem,
    Paper
} = mui;

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};



export default class Home extends Component {
  render () {
    return (
      <div>
    <Paper >
    <Menu>
        <MenuItem primaryText="Maps" />
        <MenuItem primaryText="Books" />
        <MenuItem primaryText="Flights" />
        <MenuItem primaryText="Apps" />
      </Menu>
    
   
      <div className = "center">
        <h2> Welcome PostIt chat Application. </h2>
        <p> This application allows you to create groups and send messages to all members of the group. </p>
        <p>It will also send a notification to all users and you will be notified if you message has been read</p>
      
      </div>
      </Paper>
      </div>
    )
  }
}