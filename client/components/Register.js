import React, { Component } from 'react'
import { auth } from './helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  constructor(props){
    super(props);
  
  this.state = { 
    registerError: null,
    username: '',
    email: '',
    pw: '' 
  }}
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render () {
    return (
      <div className= "center">
        <h1>Signup Page</h1>
        <form onSubmit={this.handleSubmit} className= "center">
          <div>
            <label><b>Email</b></label>
            <input ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div>
          <label><b>Username</b></label>
            <input ref={(username) => this.username = username} placeholder="Username"/>
          </div>
          <div>
            <label><b>Password</b></label>
            <input type="password" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.registerError &&
            <div>
              <span></span>
              <span>Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit">Signup</button>
        </form>
      </div>
    )
  }
}