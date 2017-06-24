import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

var {
    Card,
    CardText,
    TextField,
    RaisedButton
} = mui;


class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }


    onClick(){
      Actions.signup(this.context.router);
    }

    static contextTypes = {
      router: React.PropTypes.func.isRequired
    }

    render(){

        return (
            <Card style={{
              'maxWidth': '800px',
              'margin': '30px auto',
              'padding': '50px',
              'textAlign': 'center'
            }}>
              <CardText style={{
                'textAlign': 'center'
              }}>
                To start chatting away, please Signup below.
              </CardText>
            
            <TextField name= 'username' onChange={this.onChange} value = {this.state.username}
              errorText="This field is required" hintText="Username Field" floatingLabelText="Choose Username"/><br />
            <TextField name= 'email' onChange={this.onChange} value = {this.state.email}
              errorText="This field is required" hintText="Email Field" floatingLabelText="Your Email"/><br />
            <TextField name= 'password' onChange={this.onChange} value = {this.state.password}
          errorText="This field is required" hintText="Password Field" floatingLabelText="Choose Password" type="password" /><br />

           <br />

          <RaisedButton style={{
                display: 'block',
              }} onClick={this.onClick}
              label="Sign Up" primary={true} />

            </Card>

        );
    }
}


module.exports = Signup;

