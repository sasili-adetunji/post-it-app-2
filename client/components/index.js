import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Group from './Group'
import Home from './Home'
import Nav from './Nav'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import PostItStore from '../stores/PostItStore';
import PostItActions from '../actions/PostItActions';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import Dashboard from './protected/Dashbord'
import { firebaseAuth } from '../../server/config/db'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


// function getAppState() {
//     return {
//         errors: PostItStore.getErrors(),
//         success: PostItStore.getSuccess(),
//         loggedInUser: PostItStore.getLoggedInUser(),
//         registeredUser: PostItStore.getRegisteredUser(),
//         isAuthenticated: PostItStore.getIsAuthenticated()
//     };
// }

function PrivateRoute ({component: Component, isAuthenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/signin', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, isAuthenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props){
        super(props);
        this.state ={
           isAuthenticated: PostItStore.getIsAuthenticated(),
           user: PostItStore.getLoggedInUser()        
        };
          this._onChange= this._onChange.bind(this)
          this.handleClick = this.handleClick.bind(this)
      }


  componentDidMount () {
        PostItStore.addChangeListener(this._onChange);

        // messaging.requestPermission().
        // then(function(){
        //   console.log('Have Permisssion')
        //   return messaging.getToken();
        // })
        // .then(function(token){
        //   console.log(token)
        // })
        // .catch(function(){
        //   console.log('Error Occured')
        // })
      }

  componentWillUnmount () {
        PostItStore.removeChangeListener(this._onChange);
  }
  handleClick(e){
    e.preventDefault();
    PostItActions.signOutUser()
  }
  
  render() {
            {!this.state.isAuthenticated ? <Nav /> : ''}
    return  (
        <div>
          
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <AppBar title="Post It App" iconElementRight={<FlatButton label="Sign Out" onClick={this.handleClick} />} />
            </MuiThemeProvider>

              <Switch>
                <PublicRoute path='/' exact component={Login} />
                <PublicRoute isAuthenticated={this.state.isAuthenticated} path='/signin' component={Login} />
                <PublicRoute isAuthenticated={this.state.isAuthenticated} path='/signup' component={Register} />
                <PrivateRoute isAuthenticated={this.state.isAuthenticated} path='/dashboard' component={Dashboard} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
        </div>
    );
  }

 _onChange(){
        this.setState({
          isAuthenticated: PostItStore.getIsAuthenticated(),
          user: PostItStore.getLoggedInUser()
        });
    }
}

export default App