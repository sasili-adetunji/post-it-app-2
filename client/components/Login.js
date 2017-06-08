import React, { Component } from 'react'
// import Router from 'react-router';
import { login, resetPassword, google } from './helpers/auth'
// import AuthStore from '../stores/postit-auth.js';
// import AuthAction from '../actions/postit-auth.js';

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  constructor(props){
    super(props);
  
  this.state = { 
    loginMessage: null,
    email: '',
    pw: '' 
  }}
  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }
  googleLogin = (e) => {
    e.preventDefault()
    google()
        }
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }
  render () {
    return (
      <div className= "center">
        <h1> Login </h1>
        <form onSubmit={this.handleSubmit} className= "center">
          <div>
            <label><b>Email</b></label>
            <input ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div>
            <label><b>Password</b></label>
            <input type="password" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.loginMessage &&
            <div>
              <span></span>
              <span>Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword}>Forgot Password?</a>
            </div>
          }
          <button type="submit">Login</button>
        </form>
        <div> <a href="#" onClick={this.googleLogin}>Log in with Google</a> </div>
      </div>
    )
  }
}