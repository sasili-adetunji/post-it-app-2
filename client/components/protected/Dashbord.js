import React, { Component } from 'react'
import { Logout } from '../helpers/auth';
import { addGroup } from '../helpers/auth';

function setErrorMsg(error) {
  return {
    Error: error
  }
}


export default class Dashboard extends Component {
	state = { loginMessage: null }

  createGroup = (e) => {
    e.preventDefault()
    addGroup(this.groupName.value)
      .catch((error) => {
        this.setState(setErrorMsg('Error creating the group.'))
                  })
  }
addMembers = (e) => {
    e.preventDefault()
    groupAdd(this.newUserId.value)
      .catch((error) => {
        this.setState(setErrorMsg('Error adding member to group'))
})

  }


	          
  
  render () {
    return (
  <div className= "center">
  	 <h1> Welcome to PostIt Dashboard.</h1>
     <p><b> You can create groups and add other registered members to those groups </b></p>
          <p><b> In this way, you can send messages to those groups which will be visible to all members of the groups </b></p>

  	<form onSubmit={this.createGroup }>
	<div> <label>Create Group</label>
 		<input ref={(groupName) => this.groupName = groupName} placeholder="Group Name"/>
    <div> </div>
 	</div>
   {
            this.state.error &&
            <div>
              <span></span>
              <span>Error:</span>
              &nbsp;{this.state.error}
            </div>
          }
 <div> <button type="submit" >Create Group </button> </div>
  </form>
  <div> </div>
  
 <form onSubmit={this.addMembers }>
	<div> <label>Add Members</label>
 		<input ref={(newUserId) => this.newUserId = newUserId} placeholder="User Id"/> 

 	<div> </div>
  </div>

 <div> <button 
 type="submit" >Add Member to Group </button> </div>
 </form>

 </div>

 )
 }
}