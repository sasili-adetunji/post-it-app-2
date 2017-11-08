import React from 'react';
import firebase from 'firebase';
import mui from 'material-ui';
import toastr from 'toastr';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';
import config from '../../server/app/config/database';


/**
 * 
 * @description gets user data and login a user
 * 
 * @param {object} props
 * 
 * @class Login
 * 
 * @extends {Component}
 */

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: '',
      success: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onError = this.onError.bind(this);
    this.onClickGoogle = this.onClickGoogle.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
  }


   /**
    * @method onChange
    *
    * @description Monitors changes in the components and change the state
    *
    * @memberof Login
    *
    * @param {object} event
    *
    * @returns {void}
    */
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  /**
    * @method onError
    *
    * @description Monitors errors and succes in the components and its state
    *
    * @memberof Login
    *
    * @param {object} event
    *
    * @returns {void}
    */

  onError(e) {
    this.setState({
      errors: PostItStore.getErrors(),
      success: PostItStore.getSuccess()
    });
  }

  /**
   * @method componentDidMount
   *
   * @description adds event Listener from the Store
   * 
   * @memberof Login
  */

  componentDidMount() {
    PostItStore.addChangeListener(this.onError);
  }

/**
 * @method componentWillUnmount
 * 
 * @description Removes event Listener from the Store
 * 
 * @memberof Login
*/

  componentWillUnmount() {
    PostItStore.removeChangeListener(this.onError);
  }

/**
 * @description Makes an action call to Sign in a user with email and password
 * 
 * @param {object} event
 * 
 * @returns {void}
 * 
 * @memberof Login
*/
  onClick(event) {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    PostItActions.login(user);
    this.setState({
      email: '',
      password: '',
      errors: '',
      success: ''
    });
  }

  /**
   * @description Makes an action call to Sign in a user with with google
   * 
   * @param {object} event
   * 
   * @returns {void}
   * 
   * @memberof Login
*/
  onClickGoogle(event) {
    event.preventDefault();
    firebase.initializeApp(config);
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      PostItActions.googleLogin(result);
    })
  }
  /**
   * @description Makes an action call to reset password
   * 
   * @param {object} event
   * 
   * @returns {void}
   * 
   * @memberof Login
  */
  onClickReset(event) {
    event.preventDefault();
    const email =
      {
        email: this.state.email
      };
    PostItActions.resetPassword(email);
  }

   /**
   * @method render
   * 
   * Render login component
   * 
   * @returns {String} The HTML markup for the Login
   * 
   * @memberof Login
   */

  render() {
    return (
      <div>
        <MuiThemeProvider >
          <Card className="card" >
            <CardTitle
              title="Login Form"
              subtitle="To continue using PostIt, you need to login below" />
            <TextField
              name="email" onChange={this.onChange} value={this.state.email}
              floatingLabelText="Your Email" /><br />
            <TextField
              name="password" onChange={this.onChange} value={this.state.password}
              floatingLabelText="Your Password"
              type="password" /><br />
            <br />
            <p> Already Have an account,<Link to="/signup"> Register here </Link> </p>
            <p> Forgot your Password? Enter your Email and <a
              href="/#/signup"
              onClick={this.onClickReset}> Click here </a> </p>
            <RaisedButton
              label="Login" primary onClick={this.onClick} />
            <br />
            <br />
            <div className="row">
              <center>
                <GoogleButton onClick={this.onClickGoogle} />
              </center>
            </div>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default Login;
