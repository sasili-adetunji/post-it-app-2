import React from 'react';
import mui from 'material-ui';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { Card, CardTitle } from 'material-ui/Card';
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
      errors: ''
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
  onClick(event) {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    if ((!user.email) || (!user.password)) {
      this.setState({
        errors: 'Please enter a valid email and password'
      });
    } else {
      PostItActions.login(user);
      this.setState({
        email: '',
        password: '',
        errors: ''
      });
    }
  }
  /**
     * Makes an action call to log a user with google
     * @param {object} e
     * @returns {void}
     * @memberOf Login
  */
  onClickGoogle() {
    PostItActions.googleLogin();
  }
  /**
     * Makes an action call to reset password
     * @param {object} e
     * @returns {void}
     * @memberOf Login
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
     * @returns {String} The HTML markup for the Login
     * @memberOf Login
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
            <span className="error"> {this.state.errors} {PostItStore.getErrors()} </span> <br />
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
