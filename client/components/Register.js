import React from 'react';
import mui from 'material-ui';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import TextField  from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PostItActions from '../actions/PostItActions';
import {browserHistory} from 'react-router-dom';
import PostItStore from '../stores/PostItStore'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

class Register extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }


  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      loginMessage: null,
      isAuthenticated: PostItStore.getIsAuthenticated()  
    }
    
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }


   onClick(e){
    e.preventDefault();
    let user = {
    email: this.state.email,
    password: this.state.password,
    username: this.state.username,
    phoneNumber: this.state.phoneNumber

  }
    PostItActions.registerUser(user)
    PostItActions.receiveAuthenticatedUser(user)
    }    
  

    render(){

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
                        title="Signup Form" 
                        subtitle="To continue using PostIt, you need to register below" />
       <TextField name= 'username' onChange={this.onChange} value = {this.state.username}
              errorText="This field is required" hintText="Username Field" floatingLabelText="Choose Username"/><br />
        <TextField name= 'email' onChange={this.onChange} value = {this.state.email}
              errorText="This field is required" hintText="Email Field" floatingLabelText="Your Email"/><br />
        <TextField name= 'password' onChange={this.onChange} value = {this.state.password}
          errorText="This field is required" hintText="Password Field" floatingLabelText="Choose Password" type="password" /><br />
      <TextField name= 'phoneNumber' onChange={this.onChange} value = {this.state.phoneNumber}
          errorText="This field is required" hintText="E.g. 23480" floatingLabelText="Phone Number" /><br />

           <br />
          <p> Already Have an account,<a href='/#/signin'> Login here </a> </p>
        <RaisedButton style={{
                display: 'block',
              }} onClick={this.onClick}
              label="Sign Up" primary={true} />
     
            </Card>

</MuiThemeProvider>
                </div>        

        );
    
  }

}
module.exports = Register;

