import React, { Component } from 'react'
import LoginStore from '../stores/LoginStore.js';
import { signIn, resetPassword, google }from '../actions/PostItAuth.js';

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
    password: '' 
  }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.googleLogin = this.googleLogin.bind(this);
    this.reset = this.reset.bind(this);
}

handleChange (e) {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    signIn(this.state)
}
  googleLogin (e) {
    e.preventDefault()
    google(this.state)
}
  reset (e) {
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
            <input type="text"  ref={(email) => this.email = email} placeholder="Enter your email..." 
              onChange={this.handleChange} />
          </div>
          <div>
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter your password..." ref={(password) => this.password = password}
              onChange={this.handleChange} />
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