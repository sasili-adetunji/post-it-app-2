import React, { Component } from 'react'
import { auth } from '../src/helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Signup Page</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div>
          <label>Username</label>
            <input className="form-control" ref={(username) => this.username = username} placeholder="Username"/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
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