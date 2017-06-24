import React, { Component } from 'react';
// import Router from 'react-router';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router'

import { Logout, addGroup, addMember } from './helpers/auth';

function setErrorMsg(error) {
  return {
    groupMessage: error
  }
}


export default class addMembers extends Component {
   state = { groupMessage: null }

  handleSubmit = (e) => {
    e.preventDefault()
    addMember(this.userId.value)
    .catch((error) => {
          this.setState(setErrorMsg('Error creating Group.'))
        })
    }
   

  render () {
        return (
      <div className  = "center">
        <form onSubmit={ this.handleSubmit }>
	         <div> <label>Add Members</label>
 		       <input ref={(userId) => this.userId = userId} placeholder="User Id"/>
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
        <div> <button type="submit" >Add Members </button> </div>
      </form>

    <div> </div>
  </div>
 )
 }
}