import React from 'react';
import mui from 'material-ui';
import GoogleButton from 'react-google-button';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';


/**
 * creates Login componets
 * @class Login
 * @extends {React.Component}
 */
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isAuthenticated: PostItStore.getIsAuthenticated(),
      errors: PostItStore.getErrors()
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClickGoogle = this.onClickGoogle.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
  }
/**
   * Monitors changes in the components and change the state
   * @param {object} e
   * @returns {void}
   * @memberOf Login
*/
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

/**
   * Makes an action call to log a user with email and password
   * @param {object} e
   * @returns {void}
   * @memberOf Login
*/
  onClick(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    PostItActions.login(user);
  }
/**
   * Makes an action call to log a user with google
   * @param {object} e
   * @returns {void}
   * @memberOf Login
*/
  onClickGoogle(googleUser) {
    const idToken = googleUser.getAuthResponse().id_token;
    PostItActions.googleLogin(idToken);
  }
/**
   * Makes an action call to reset password
   * @param {object} e
   * @returns {void}
   * @memberOf Login
*/
  onClickReset(e) {
    e.preventDefault();
    const email =
      {
        email: this.state.email
      };
    PostItActions.resetPassword(email);
  }

/**
   * @returns {String} The HTML markup for the Login
   * @memberOf Login
   */
  render() {
    return (
      <div>
        <MuiThemeProvider >
          <Card style={{
            maxWidth: '800px',
            margin: '30px auto',
            padding: '50px',
            textAlign: 'center'
          }}>
            <CardTitle
              style={{ textAlign: 'center' }}
              title="Login Form"
              subtitle="To continue using PostIt, you need to login below" />
            <TextField
              name="email" onChange={this.onChange} value={this.state.email} hintText="Email Field"
              floatingLabelText="Your Email" /><br />
            <TextField
              name="password" onChange={this.onChange} value={this.state.password}
              hintText="Password Field" floatingLabelText="Choose Password"
              type="password" /><br />
            <br />
            <span style={{ color: 'red' }} > {PostItStore.getErrors()} </span> <br />
            <p> Dont Have an account, <a href="/#/signup"> Register here </a> </p>
            <p> Forgot your Password? Enter your Email and <a
            href="/#/signup"
            onClick={this.onClickReset}> Click here </a> </p>
            <RaisedButton
              style={{ display: 'block' }}
              label="Login" primary onClick={this.onClick} />
            <br />
            <div className="row">
              <center>
                <GoogleButton
              onClick={this.onClickGoogle}
              />
              </center>
            </div>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default Login;
