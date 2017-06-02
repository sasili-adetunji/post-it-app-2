import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Dashboard from './protected/Dashbord'
import { logout } from '../src/helpers/auth'
import { firebaseAuth } from '../../server/config/db'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div>
          <nav>
            <div>
              <div>
                <Link to="/">PostIt Chat Application</Link>
              </div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  {this.state.authed
                    ? <button
                        onClick={() => {
                          logout()
                        }}> Logout</button>
                    : <span>
                        <Link to="/user/signin">Login</Link>

                        <Link to="/user/signup">Register</Link>
                      </span> }
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/user/signin' component={Login} />
                <PublicRoute authed={this.state.authed} path='/user/signup' component={Register} />
                <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}