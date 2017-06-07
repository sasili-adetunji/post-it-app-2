import React, { Component } from 'react'
import { Logout, addGroup } from '../helpers/auth';

function setErrorMsg(error) {
  return {
    Error: error
  }
}

export default class Dashboard extends Component {
  constructor(props){
    super(props);
  
  this.state = { 
    loginMessage: null,
    groupName: ''
  }}

  render () {
    return (
  <div className= "center">
  	 <h1> Welcome to PostIt Dashboard.</h1>
     <p><b> You can create groups and add other registered members to those groups </b></p>
          <p><b> In this way, you can send messages to those groups which will be visible to all members of the groups </b></p>

  </div>

 )
 }
}