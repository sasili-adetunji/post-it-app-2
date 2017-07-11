import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, hashHistory, Switch } from 'react-router-dom'


class Nav extends Component {
    state = {
    authed: false,
    loading: true,
  }
  render() {
    return (

          <div className="container">
            <nav>
              <ul>
                <li> <Link to='/'>Home</Link></li>   
                                <li> <Link to='/dashboard'>Dashboard</Link></li>            
         
                 <li>
                  {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}} onClick={this.handleSubmit.bind(this)} className="navbar-brand">Logout</button>
                    : <span>                 
                      <Link to="/signup">SignUp&nbsp;&nbsp;</Link>
                      <Link to="/signin">SignIn&nbsp;&nbsp;</Link>    
                      </span>}
                </li>   
              </ul>
            </nav>
          </div>
        )
      }

  handleSubmit(){
      console.log("Logout")
  }
}

export default Nav