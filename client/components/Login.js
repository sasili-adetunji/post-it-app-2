import React, { Component } from 'react'
import LoginStore from '../stores/LoginStore.js';
import { signIn, resetPassword, google, signOut  }from '../actions/PostItAuth.js';
import axios from 'axios';

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
  }
}

  handleSubmit = (e) => {
    e.preventDefault()
    signIn(this.email.value, this.pw.value)
    .catch((error) => {
          this.setState(setErrorMsg('Error signing in.'))
        })
    // axios.post('http://localhost:8000/user/signin', {email: this.state.email, password: this.state.pw})
  }
  googleLogin = (e) => {
    e.preventDefault()
    google()
    .catch((error) => {
          this.setState(setErrorMsg('Error signining with google.'))
        })
  }
  reset = (e) => {
    e.preventDefault()
    resetPassword()
  }
  render () {
    return (
      <div className= "center">
        
        <form onSubmit={this.handleSubmit} className= "center">
        <h1> Login </h1>
          <div>
            <label><b>Email</b></label>
            <input type="text"  ref={(email) => this.email = email} placeholder="Enter your email..." required/>
          </div>
          <div>
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter your password..." ref={(pw) => this.pw = pw} required />
          </div>
          {
            this.state.loginMessage &&
            <div>
              <span></span>
              <span>Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.reset}>Forgot Password?</a>
            </div>
          }
          <button type="submit">Login</button>
        </form>
        <div> <a href="#" onClick={this.googleLogin}>Log in with Google</a> </div>
      </div>
    )
  }
}