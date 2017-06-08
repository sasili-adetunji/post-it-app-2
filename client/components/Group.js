import React, { Component } from 'react';
// import Router from 'react-router';
import { Logout, addGroup } from './helpers/auth';

function setErrorMsg(error) {
  return {
    groupMessage: error
  }
}


export default class Group extends Component {
   state = { groupMessage: null }

  handleSubmit = (e) => {
    e.preventDefault()
    addGroup(this.groupName.value)
    .catch((error) => {
          this.setState(setErrorMsg('Error creating Group.'))
        })
 
    
}

  render () {
    return (
    	<div className  = "center">
        <form onSubmit={ this.handleSubmit }>
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