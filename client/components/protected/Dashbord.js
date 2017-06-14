import React, { Component } from 'react'
import { signOut, message }from '../../actions/PostItAuth.js';
import MessageBox from '../MessageBox';
import GroupList from '../GroupList';
import MessageList from '../MessageList';
import GroupAdd from '../GroupAdd';



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  

  render () {
    return (
  <div className= "center">
  	 <h1> Welcome to PostIt Dashboard.</h1>
     <p><b> You can create groups and add other registered members to those groups </b></p>
          <p><b> In this way, you can send messages to those groups which will be visible to all members of the groups </b></p>
  <div><h3> Send Message to Group </h3> </div>
  <MessageBox />
  <GroupAdd />
  <GroupList />
  <MessageList />
  </div>

 )
 }
}