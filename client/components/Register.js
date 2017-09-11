import React from 'react';
import mui from 'material-ui';
import { Redirect, browserHistory } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';

/**
 * 
 * 
 * @class Register
 * @extends {React.Component}
 */
class Register extends React.Component {
  /**
   * Creates an instance of Register.
   * @param {object} props
   * @memberOf Register
   */
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      isAuthenticated: PostItStore.getIsAuthenticated(),
      errors: PostItStore.getErrors()
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
/**
   * Monitors changes in the components and change the state
   * @param {object} e
   * @returns {void}
   * @memberOf Register
*/
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
/**
   * Makes an action call to register a user with email and password
   * @param {object} e
   * @returns {void}
   * @memberOf Register
*/
  onClick(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
      userName: this.state.userName,
      phoneNumber: this.state.phoneNumber

    };
    PostItActions.registerUser(user);
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
                title="Signup Form"
                subtitle="To continue using PostIt, you need to register below" />
            <TextField
                name="username" onChange={this.onChange}
                value={this.state.userName} hintText="Username Field"
                floatingLabelText="Choose Username" /><br />
            <TextField
                name="email" onChange={this.onChange} value={this.state.email} hintText="Email Field"
                floatingLabelText="Your Email" /><br />
            <TextField
                name="password" onChange={this.onChange}
                value={this.state.password} hintText="Password Field"
                floatingLabelText="Choose Password" type="password" /><br />
            <TextField
                name="phoneNumber" onChange={this.onChange}
                value={this.state.phoneNumber}
                hintText="E.g. 23480" floatingLabelText="Phone Number" /><br />
            <br />
            <span style={{ color: 'red' }} > {PostItStore.getErrors()} </span> <br />
            <p> Already Have an account,<a href="/#/signin"> Login here </a> </p>
            <RaisedButton
                style={{
                  display: 'block',
                }} onClick={this.onClick}
                onTouchTap={this.handleTouchTap}
                label="Sign Up" primary />
          </Card>
        </MuiThemeProvider>
      </div>

    );
  }

}
export default Register;
