import React from 'react';
import mui from 'material-ui';
import { Link } from 'react-router-dom';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';


/**
 * @description gets user data and register a user
 * 
 * @export
 * 
 * @param {object} props
 * 
 * @class Register
 * 
 * @extends {Component}
 */
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      phoneNumber: '',
      errors: {}
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
   /**
    * @method onChange
    *
    * @description Monitors changes in the components and change the state
    *
    * @memberof Register 
    *
    * @param {object} event
    *
    * @returns {void}
    */

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


/**
 * @description Makes an action call to Sign in a user with email and password
 * 
 * @param {object} event
 * 
 * @returns {void}
 * 
 * @memberof Register
*/

  onClick(event) {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
      userName: this.state.userName,
      phoneNumber: this.state.phoneNumber
    };
      if (!user.email) {
      this.setState({ errors: { email: 'Email is required' } })
    } else if (!user.password) {
        this.setState({ errors: { password: 'Password is required' } })
    }
    else if (!user.phoneNumber) {
      this.setState({ errors: { phoneNumber: 'Phone Number is required' } })
      } else if (!user.userName) {
      this.setState({ errors: { userName: 'userName is required' } })
      } else {
    PostItActions.registerUser(user);

    // clears the state
  
    this.setState({
      userName: '',
      email: '',
      password: '',
      phoneNumber: '',
      errors: {}
    });
  }
  }
 /**
  * @description Render register component

   * @method render
   * 
   * Render react component
   * 
   * @returns {String} The HTML markup for the Register Components
   * 
   * @memberof Register
   */
  render() {
    return (
      <div>
        <MuiThemeProvider >
          <Card className="card" >
            <CardTitle
              title="Signup Form"
              subtitle="To continue using PostIt, you need to register below" />
            <TextField
              name="userName" onChange={this.onChange}
              errorText={this.state.errors.userName}
              value={this.state.userName} floatingLabelText="Choose Username" />
              <br />
            <TextField
              name="email" onChange={this.onChange} value={this.state.email}
              errorText={this.state.errors.email}
              floatingLabelText="Your Email" /><br />
            <TextField
              name="password" onChange={this.onChange}
              value={this.state.password}
              errorText={this.state.errors.password}
              floatingLabelText="Choose Password" type="password" /><br />
            <TextField
              name="phoneNumber" onChange={this.onChange}
              errorText={this.state.errors.phoneNumber}
              floatingLabelText="Phone Number" /><br />
            <br />
            <p> Already Have an account,<Link to="/signin"> Login here </Link> 
            </p>
            <RaisedButton
              onClick={this.onClick}
              onTouchTap={this.handleTouchTap}
              label="Sign Up" primary />
          </Card>
        </MuiThemeProvider>
      </div>

    );
  }

}
export default Register;
