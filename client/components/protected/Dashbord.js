import React, { Component } from 'react'
import { Logout, message } from '../helpers/auth';

function setErrorMsg(error) {
  return {
    Error: error
  }
}
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { MessageInput: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
handleSubmit = (e) => {
    e.preventDefault()
    message(this.messageBody.value, this.groupId.value)
      
  }  

  render () {
    return (
  <div className= "center">
  	 <h1> Welcome to PostIt Dashboard.</h1>
     <p><b> You can create groups and add other registered members to those groups </b></p>
          <p><b> In this way, you can send messages to those groups which will be visible to all members of the groups </b></p>
  <div><h3> Send Message to Group </h3> </div>
  <form className="message" onSubmit={this.handleSubmit}>
        <input type="text" ref={(messageBody) => this.messageBody = messageBody}
          placeholder="Write a message..." />
          <input type="text" ref={(groupId) => this.groupId = groupId}
          placeholder="Enter the group Id... " />
      <div> <button type="submit">Send</button> </div>
     </form>

  </div>

 )
 }
}