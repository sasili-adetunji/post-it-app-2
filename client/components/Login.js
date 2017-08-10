import React from 'react';
import mui from 'material-ui';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import firebase from 'firebase';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';

import { firebaseAuth, ref } from '../../server/config/db';


function setErrorMsg(error) {
  return {
    loginMessage: error
  };
}


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginMessage: null,
      isAuthenticated: PostItStore.getIsAuthenticated(),
      errors: PostItStore.getErrors()
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClickGoogle = this.onClickGoogle.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  onClick() {
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    PostItActions.login(user);
  }

  onClickGoogle() {
    PostItActions.googleLogin();
  }

  onClickReset() {
    const email =
      {
        email: this.state.email
      };
    PostItActions.resetPassword(email);
  }

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
              name="email" onChange={this.onChange} value={this.state.email}
              errorText={this.state.errors} hintText="Email Field" floatingLabelText="Your Email" /><br />
            <TextField
              name="password" onChange={this.onChange} value={this.state.password}
              errorText={this.state.errors} hintText="Password Field" floatingLabelText="Choose Password" type="password" /><br />
            <br />
            {
            this.state.loginMessage &&
            <div>
              <span />
              <span>Error:</span>
              &nbsp;{this.state.errors} <a href="#" onClick={this.onClickReset}>Forgot Password?</a>
            </div>
          }
            <p> Dont Have an account,<a href="/#/signup"> Register here </a> </p>
            <p> Forgot your Password? Enter your Email and <a href="/#/signup" onClick={this.onClickReset}> Click here </a> </p>
            <RaisedButton
              style={{
                display: 'block',
              }}
              label="Login" primary onClick={this.onClick} />
            <div />
            <FlatButton
          style={{
            width: '50%',
            margin: '0 auto',
            border: '2px solid',
            backgroundColor: '#ffd699',
          }}
            label="Sign in with Google" primary onClick={this.onClickGoogle}
          />
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default Login;
