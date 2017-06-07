import React, { Component } from 'react'
import { Logout, addGroup } from './helpers/auth';



export default class Group extends Component {
   state = { loginMessage: null }

  createGroup = (e) => {
    e.preventDefault()
    addGroup(this.groupName.value)
}

  render () {
    return (
    	<div className  = "center">
        <form onSubmit={ this.createGroup }>
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
  </div>
 )
 }
}