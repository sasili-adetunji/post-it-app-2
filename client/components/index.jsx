import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PostItStore from '../stores/PostItStore';
import Login from './Login';
import Register from './Register';
import MessageBoard from './protected/MessageBoard';
import MessageList from './protected/MessageList';
import ForgotPassword from './ForgotPassword';


 /**
 * @description function that returns private routes
 *
 * @param {any} { component: Component, isAuthenticated, ...rest }
 *
 * @returns {void}
 */

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/signin', state: { from: props.location }
        }}
        />}
    />
  );
}


/**
 * @description function that returns piblic routes
 *
 * @param {any} { component: Component, isAuthenticated, ...rest }
 *
 * @returns {void}
 */
function PublicRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => isAuthenticated === false
        ? <Component {...props} />
        : <Redirect to="/messageboard" />}
    />
  );
}


/**
 * @description create the app componets
 *
 * @class App
 *
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: PostItStore.getIsAuthenticated(),
    };
    this.onChange = this.onChange.bind(this);
  }


   /**
   * @method componentDidUnmount
   *
   * @description adds event Listener from the Store
   *
   * @memberof App
  */
  componentDidMount() {
    PostItStore.addChangeListener(this.onChange);
  }


 /**
   * @method componentWillUnmount
   *
   * @description Removes event Listener from the Store
   *
   * @memberof App
  */
  componentWillUnmount() {
    PostItStore.removeChangeListener(this.onChange);
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

  /**
  * @description Route for rendering componets in the main App
  *
  * @class App
  *
  * @extends {Component}
  * */
  render() {
    return (
      <div>
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
            component={MessageBoard}
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
