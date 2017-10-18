import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import PostItStore from '../stores/PostItStore';
import PostItActions from '../actions/PostItActions';
import Login from './Login';
import Register from './Register';
import Group from './protected/Group';
import CreateGroup from './protected/CreateGroup';
import MessageBoard from './protected/MessageBoard';
import MessageList from './protected/MessageList';

injectTapEventPlugin();


 /* function that returns private routes
 * @param {any} { component: Component, isAuthenticated, ...rest }
 * @returns {void}
 */

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />}
    />
  );
}

/**
 * function that returns piblic routes
 * @param {any} { component: Component, isAuthenticated, ...rest }
 * @returns {void}
 */
function PublicRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props  => isAuthenticated === false
        ? <Component {...props} />
        : <Redirect to="/messageboard" />}
    />
  );
}


/**
 * create the app componets
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: PostItStore.getIsAuthenticated(),
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
   /**
   * @method componentDidUnmount
   * @description adds event Listener from the Store
   * @memberof App
  */
  componentDidMount() {
    PostItStore.addChangeListener(this.onChange);
  }

 /**
   * @method componentWillUnmount
   * @description Removes event Listener from the Store
   * @memberof App
  */
  componentWillUnmount() {
    PostItStore.removeChangeListener(this.onChange);
  }
/**
   * @description Makes an action call to signout a user
   * @param {object} event
   * @returns {void}
   * @memberof App
  */
  handleClick(event) {
    event.preventDefault();
    PostItActions.signOutUser();
  }

  /**
  * @description Route for rendering componets in the main App
  * 
  * @export
  * @class App
  * @extends {Component}
  **/

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <AppBar
            title="Post It App" iconElementRight={<FlatButton
              label="Log Out" onClick={this.handleClick} />} />
        </MuiThemeProvider>
        <Switch>
          <PublicRoute path="/" exact component={Login} />
          <PublicRoute
            isAuthenticated={this.state.isAuthenticated}
            path="/signin" component={Login} />
          <PublicRoute
            isAuthenticated={this.state.isAuthenticated}
            path="/signup" component={Register} />
          <PrivateRoute
            isAuthenticated={this.state.isAuthenticated}
            path="/messageboard" component={MessageBoard} />
          <PrivateRoute
            isAuthenticated={this.state.isAuthenticated}
            path="/messageboard/:groupId" component={MessageList} />
          <Route render={() => <h3>No Match</h3>} />
        </Switch>
      </div>
    );
  }

   /**
    * @method onChange
    * @description Monitors changes in the components and change the state
    * @memberof App
    * @param {object}
    * @returns {void}
    */

  onChange() {
    this.setState({
      isAuthenticated: PostItStore.getIsAuthenticated(),
    });
  }
}

export default App;
