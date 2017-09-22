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
 * Creates Register components
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
      userName: '',
      email: '',
      password: '',
      phoneNumber: '',
      errors: ''
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
    if ((!user.email) || (!user.password) || (!user.userName)) {
      this.setState({
        errors: 'Please enter valid details'
      });
    } else {
      PostItActions.registerUser(user);
      this.setState({
        userName: '',
        email: '',
        password: '',
        phoneNumber: '',
        errors: ''
      });
    }
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
              title="Signup Form"
              subtitle="To continue using PostIt, you need to register below" />
            <span className="success"> {PostItStore.getSuccess()} </span> <br />
            <TextField
              name="userName" onChange={this.onChange}
              value={this.state.userName} floatingLabelText="Choose Username" /><br />
            <TextField
              name="email" onChange={this.onChange} value={this.state.email}
              floatingLabelText="Your Email" /><br />
            <TextField
              name="password" onChange={this.onChange}
              value={this.state.password}
              floatingLabelText="Choose Password" type="password" /><br />
            <TextField
              name="phoneNumber" onChange={this.onChange}
              floatingLabelText="Phone Number" /><br />
            <br />
            <span className="error"> {this.state.errors} {PostItStore.getErrors()} </span> <br />
            <p> Already Have an account,<Link to="/signin"> Login here </Link> </p>
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
