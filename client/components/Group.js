import React, { Component } from 'react';
import { signOut, addGroup }from '../actions/PostItAuth.js';

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