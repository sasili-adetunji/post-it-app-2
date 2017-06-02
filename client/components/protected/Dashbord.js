import React, { Component } from 'react'
import { Logout } from '../helpers/auth';




export default class Dashboard extends Component {
	state = { loginMessage: null }

  createGroup = (e) => {
    e.preventDefault()
    group(this.groupName.value)
      .catch((error) => {
                  })
  }
addMembers = (e) => {
    e.preventDefault()
    groupAdd(this.newUserId.value)
      .catch((error) => {
})

  }


	          
  
  render () {
    return (
  <div>
  	 <h1> This is the Dashboard. It is a protected route. You can only see this 
  if you're authorized.</h1>
  	<form onSubmit={this.createGroup }>
	<div> <label>Create Group</label>
 		<input ref={(groupName) => this.groupName = groupName} placeholder="Group Name"/>
    <div> </div>
 	</div>
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