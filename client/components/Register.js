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

    onClick(){
      Actions.signin(this.context.router);
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
            
            <TextField errorText="This field is required" hintText="Username Field" floatingLabelText="Choose Username"/><br />
            <TextField errorText="This field is required" hintText="Email Field" floatingLabelText="Your Email"/><br />
            <TextField errorText="This field is required" hintText="Password Field" floatingLabelText="Choose Password" type="password" /><br />

           <br />

          <RaisedButton style={{
                display: 'block',
              }} onClick={this.onClick.bind(this)}
              label="Sign Up" primary={true} />

            </Card>

        );
    }
}


module.exports = Signup;

