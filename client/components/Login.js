import React from 'react';
import mui from 'material-ui';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import TextField  from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}


class Login extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      loginMessage: null,
      isAuthenticated: PostItStore.getIsAuthenticated()  
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClickGoogle = this.onClickGoogle.bind(this);
    this.onClickReset = this.onClickReset.bind(this); 
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }


    onClick(){

      let user = {
        email: this.state.email,
        password: this.state.password
      }
        PostItActions.login(user)
        PostItActions.receiveAuthenticatedUser(user)

        this.context.router.history.push('/dashboard')
        

  }

     onClickGoogle(){
      Actions.googleLogin(this.context.router);
    }

    onClickReset(){
      Actions.reset({ email: this.state.email
          })
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
    }

  render(){
    if (this.state.isAuthenticated == true) {
            return (
                <Redirect to="/dashboard"/>
            )
        }
        else {


        return (
               <div>

      <MuiThemeProvider >
          <Card style={{
              'maxWidth': '800px',
              'margin': '30px auto',
              'padding': '50px',
              'textAlign': 'center'
            }}>
               <CardTitle style={{'textAlign': 'center'}}
                        title="Login Form" 
                        subtitle="To continue using PostIt, you need to login below" />
      
            
            <TextField name= 'email' onChange={this.onChange} value = {this.state.email}
              errorText="This field is required" hintText="Email Field" floatingLabelText="Your Email"/><br />
            <TextField name= 'password' onChange={this.onChange} value = {this.state.password}
          errorText="This field is required" hintText="Password Field" floatingLabelText="Choose Password" type="password" /><br />
          
           <br />
           {
            this.state.loginMessage &&
            <div>
              <span></span>
              <span>Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.onClickReset }>Forgot Password?</a>
            </div>
          }
           <p> Dont Have an account,<a href='/#/signup'> Register here </a> </p>

          <RaisedButton style={{
                display: 'block',
              }} 
              label="Login" primary={true} onClick={this.onClick} />
              <div>
              </div>
        <FlatButton style={{
      width: '50%',
      margin: '0 auto',
      border: '2px solid',
      backgroundColor: '#ffd699',
    }} label="Sign in with Google" primary={true} onClick={this.onClickGoogle} />

            </Card>
</MuiThemeProvider>
                </div>  
        );
    }
}

}
module.exports = Login;

