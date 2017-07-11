import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, hashHistory, Switch, Redirect } from 'react-router-dom'
import Nav from './Nav';
import Routes from './Routes';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Dashboard from './protected/Dashbord';
import Login from './Login';
import Register from './Register';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PostItStore from '../stores/PostItStore';
import PostItActions from '../actions/PostItActions';
import PropTypes from 'prop-types';



injectTapEventPlugin();

function getAppState() {
    return {
        errors: PostItStore.getErrors(),
        success: PostItStore.getSuccess(),
        loggedInUser: PostItStore.getLoggedInUser(),
        registeredUser: PostItStore.getRegisteredUser(),
        isAuthenticated: PostItStore.getIsAuthenticated()
    };
}

class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  getInitialState(){
    return getAppState()
  }
  constructor(props){
    super(props);
  this.state = getAppState();
  this.handleClick = this.handleClick.bind(this);
  this._onChange= this._onChange.bind(this)
}

_onChange(){
        this.setState(getAppState());
    }  

 componentDidMount(){
    PostItStore.addChangeListener(this._onChange);
  }
  componentUnmount() {
  PostItStore.removeChangeListener(this._onChange);
}
  handleClick(e){
    e.preventDefault();
   
    let signout = PostItActions.signOutUser()
    if (signout){
    this.context.router.history.push('/signin')
  }
  }


  render() {

     
    console.log('Ret render auth:', this.state.isAuthenticated)

    const rightButtons = (
      <div>
        <FlatButton label="Sign Out" onClick={this.handleClick} />
      </div>
);
    return (
     <div>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <AppBar title="Post It App" iconElementRight={rightButtons} />
            </MuiThemeProvider>
            {this.state.isAuthenticated ? <Redirect to="/dashboard"/> : 
            <Redirect to="/signin"/> }
            <Routes auth={this.state.isAuthenticated} />
    </div>
    )
  }
   
}



export default App