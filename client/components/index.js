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
import Dashboard from './protected/Dashbord';
import CreateGroup from './protected/CreateGroup';
import MessageBoard from './protected/MessageBoard';


injectTapEventPlugin();

/**
 * function that returns route then
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
 *
 * @param {any} { component: Component, isAuthenticated, ...rest }
 * @returns {void}
 */
function PublicRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => isAuthenticated === false
        ? <Component {...props} />
        : <Redirect to="/dashboard" />}
    />
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: PostItStore.getIsAuthenticated(),
      user: PostItStore.getLoggedInUser(),
      errors: PostItStore.getErrors()
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  /**
   *  adds changeListener from the store
   *
   * @memberof App
   */
  componentDidMount() {
    PostItStore.addChangeListener(this.onChange);
  }

  /**
   * removes change listener from the store
   *
   * @memberof App
   */
  componentWillUnmount() {
    PostItStore.removeChangeListener(this.onChange);
  }
  handleClick(e) {
    e.preventDefault();
    PostItActions.signOutUser();
  }
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <AppBar
            title="Post It App" iconElementRight={<FlatButton
              label="Sign Out" onClick={this.handleClick} />} />
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
            path="/dashboard" component={Dashboard} />
          <PrivateRoute
            isAuthenticated={this.state.isAuthenticated}
            path="/addgroup" component={CreateGroup} />
          <PrivateRoute
            isAuthenticated={this.state.isAuthenticated}
            path="/messageboard" component={MessageBoard} />
          <Route render={() => <h3>No Match</h3>} />
        </Switch>
      </div>
    );
  }

  /**
   * monitors changes of the components
   *
   * @memberof App
   */
  onChange() {
    this.setState({
      isAuthenticated: PostItStore.getIsAuthenticated(),
      user: PostItStore.getLoggedInUser(),
      errors: PostItStore.getErrors()
    });
  }
}

export default App;
