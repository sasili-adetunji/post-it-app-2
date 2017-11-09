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
      errors: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onError = this.onError.bind(this);
    this.onClick = this.onClick.bind(this);
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
    * @method onError
    *
    * @description Monitors errors in the components and its state
    *
    * @memberof Register
    *
    * @param {object} event
    *
    * @returns {void}
    */

  onError(event) {
    this.setState({
      errors: PostItStore.getErrors()
    });
  }

  /**
   * @method componentDidMount
   * 
   * @description adds event Listener from the Store
   * 
   * @memberof Register
  */

  componentDidMount() {
    PostItStore.addChangeListener(this.onError);
  }

  /**
   * @method componentWillUnmount
   * 
   * @description Removes event Listener from the Store
   * 
   * @memberof Register
  */
  componentWillUnmount() {
    PostItStore.removeChangeListener(this.onError);
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
    PostItActions.registerUser(user);

    // clears the state
  
    this.setState({
      userName: '',
      email: '',
      password: '',
      phoneNumber: '',
      errors: ''
    });
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
              value={this.state.userName} floatingLabelText="Choose Username" />
              <br />
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
