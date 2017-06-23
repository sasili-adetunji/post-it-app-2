import React, { Component } from 'react'
import { signUp }from '../actions/PostItAuth.js';


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
    password: '' 
  }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

 handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    signUp(this.state)
  }
  render () {
    return (
     <div className= "form-group center">
        <h1>Signup Page</h1>
        <form onSubmit={this.handleSubmit} className= "form-horizontal">
          <div className= "form-group">
           <label htmlFor="email" className='control-label'>Email address:</label>
           <input onChange={this.handleChange} ref={(email) => this.email = email} placeholder='Email' className ='form-control'/>
          </div>
          <div>
           <label for="username" className='control-label'>User Name:</label>
            <input onChange={this.handleChange} className ='form-control' ref={(username) => this.username = username} placeholder="Username"/>
          </div>
          <div>
           <label htmlFor="password" className='control-label'>Password: </label>
            <input onChange={this.handleChange} className ='form-control' type="password" placeholder="Password" ref={(password) => this.password = password} />
          </div>
          {
            this.state.registerError &&
            <div>
              <span></span>
              <span>Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit" className='btn btn-default'>Signup</button>
        </form>
      </div>
    )
  }
}