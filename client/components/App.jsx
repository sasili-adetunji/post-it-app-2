import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AppStore from '../stores/AppStore';
import Login from './Login';
import Register from './Register';
import Dashboard from './protected/Dashboard';
import MessageList from './protected/MessageList';
import ForgotPassword from './ForgotPassword';
import NavBar from './NavBar';


/**
 * @description Create a Route for users who have been authenticated
 *
 * @param {any} {component: Component, isAuthenticated, ...rest}
 *
 * @returns {void} void
 */

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to="/signin" />}
  />
);


/**
 * @description Create a Route for users who are not authenticated
 *
 * @param {any} {component: Component, isAuthenticated, ...rest}
 *
 * @returns {void} void
 */
const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => isAuthenticated === false
      ? <Component {...props} />
      : <Redirect to="/messageboard" />}
  />
);


/**
 * @description Route for rendering componets in the main App
 *
 * @class App
 *
 * @extends {Component}
 */
class App extends Component {
  /**
   * @description Creates an instance of App.
   * bind methods and set initial state.
   *
   * @memberof App
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: AppStore.getIsAuthenticated(),
    };
    this.onChange = this.onChange.bind(this);
  }


  /**
  * @method componentDidMount
  *
  * @description Adds an event Listener to the Store and fires
  * when the component is fully mounted.
  *
  * @return {void}
  *
  * @memberof App
  */
  componentDidMount() {
    AppStore.addChangeListener(this.onChange);
  }


  /**
   * @method componentWillUnmount
   *
   * @return {void}
   *
   * @description Removes event Listener from the Store
   *
   * @memberof App
   */
  componentWillUnmount() {
    AppStore.removeChangeListener(this.onChange);
  }

  /**
    * @method onChange
    *
    * @return {void}
    *
    * @description Monitors changes in the components and change the state
    *
    * @memberof App
    */

  onChange() {
    this.setState({
      isAuthenticated: AppStore.getIsAuthenticated(),
    });
  }

  /**
   * @memberof App
   *
	 * @return { ReactElement } rendered markup
   */
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <PublicRoute path="/" exact component={Login} />
          <PublicRoute
            isAuthenticated={this.state.isAuthenticated}
            path="/signin"
            component={Login}
          />
          <PublicRoute
            isAuthenticated={this.state.isAuthenticated}
            path="/signup"
            component={Register}
          />
          <PublicRoute
            isAuthenticated={this.state.isAuthenticated}
            path="/forgotPassword"
            component={ForgotPassword}
          />
          <PrivateRoute
            isAuthenticated={this.state.isAuthenticated}
            path="/messageboard"
            component={Dashboard}
          />
          <PrivateRoute
            isAuthenticated={this.state.isAuthenticated}
            path="/messageboard/:groupId"
            component={MessageList}
          />
          <Route render={() => <h3>No Match</h3>} />
        </Switch>
      </div>
    );
  }
}

export default App;
