import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, hashHistory, Switch, Redirect } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home'
import Dashboard from './protected/Dashbord'
import PostItStore from '../stores/PostItStore'


class RoutesDash extends Component {   
  constructor(props){
    super(props);
    
  }
  
  render(){
  return(
          

          <Switch>
            <Route path='/dashboard' component={Dashboard} auth={this.props.isAuthenticated} />
          </Switch>

           
      );
  }
}
export default RoutesDash