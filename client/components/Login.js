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
    this.googleLogin = this.googleLogin.bind(this);
   this.reset = this.reset.bind(this);

}

handleChange (e) {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    signIn(this.email.value, this.password.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  googleLogin (e) {
    e.preventDefault()
    google(this.state)
}
  reset (e) {
    e.preventDefault()
    resetPassword(this.state)
  }

  render () {
    return (
      <div className= "form-group center">
        <h1>Login Page</h1>
      
       <form onSubmit={this.handleSubmit} className= "form-horizontal">
          <div className= "form-group">
           <label htmlFor="email" className='control-label'>Email address:</label>
         <input ref={(email) => this.email = email} onChange={this.handleChange} placeholder='Email' className ='form-control'/>
          </div>
      <div>
           <label htmlFor="password" className='control-label'>Password: </label>
            <input ref={(password) => this.password = password} onChange={this.handleChange} className ='form-control' type="password" placeholder="Password" />
          </div>          

          {
            this.state.loginMessage &&
            <div>
              <span></span>
              <span>Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.reset}>Forgot Password?</a>
            </div>
          }
          <button type="submit" className='btn btn-default'>Login</button>
        </form>
        <div> <a href="#" onClick={this.googleLogin}>Log in with Google</a> </div>
      </div>
    )
  }
}