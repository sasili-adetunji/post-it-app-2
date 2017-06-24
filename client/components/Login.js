import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

var {
    Card,
    CardText,
    TextField,
    RaisedButton
} = mui;


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
      Actions.login(this.context.router);
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
                To start chatting away, please login below.
              </CardText>
            
            <TextField name= 'email' onChange={this.onChange} value = {this.state.email}
              errorText="This field is required" hintText="Email Field" floatingLabelText="Your Email"/><br />
            <TextField name= 'password' onChange={this.onChange} value = {this.state.password}
          errorText="This field is required" hintText="Password Field" floatingLabelText="Choose Password" type="password" /><br />

           <br />

          <RaisedButton style={{
                display: 'block',
              }} onClick={this.onClick.bind(this)}
              label="Login" primary={true} />

            </Card>

        );
    }
}


module.exports = Login;

