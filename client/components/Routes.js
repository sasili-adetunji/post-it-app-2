import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, hashHistory, Switch, Redirect } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home'
import Dashboard from './protected/Dashbord'
import PostItStore from '../stores/PostItStore'


class Routes extends Component {   
  constructor(props){
    super(props);
    
  }
  
  render(){
  return(
          

          <Switch>
            <Route path='/' exact component={Login}  />
            <Route path='/signin' component={Login} auth={this.props.isAuthenticated}/>
            <Route path='/signup' component={Register} auth={this.props.isAuthenticated}/>
            <Route path='/dashboard' component={Dashboard} auth={this.props.isAuthenticated} />
            <Route render={() => <h3>No Match</h3>} />
          </Switch>

           
      );
  }
}
export default Routes