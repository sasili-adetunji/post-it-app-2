import React from 'react';
import NavBar from './NavBar';
import PostItActions from '../actions/PostItActions';


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
      this.setState({ errors: { email: 'Email is required' } });
    } else if (!user.password) {
      this.setState({ errors: { password: 'Password is required' } });
    } else if (!user.phoneNumber) {
      this.setState({ errors: { phoneNumber: 'Phone Number is required' } });
    } else if (!user.userName) {
      this.setState({ errors: { userName: 'userName is required' } });
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
        <NavBar />
        <div className="login-container">
          <h1>Sign Up</h1>
          <p>To continue using PostIt, you need to sign up below</p>
          <div className="error">
            {this.state.errors.email}
            {this.state.errors.password} {this.state.errors.phoneNumber}
            {this.state.errors.userName}
          </div>
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                id="username"
                name="userName"
                onChange={this.onChange}
                value={this.state.userName}
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                className="form-control"
                name="phoneNumber"
                onChange={this.onChange}
                id="phoneNumber"
                value={this.state.phoneNumber}
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={this.state.password}
                id="password"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-default"
              onClick={this.onClick}
            >Submit</button>
          </form>
          <div className="clear" />
          <p> Already have an account? <a href="/#/signin"> Login here
            </a> </p>
        </div>
      </div>
    );
  }

}
export default Register;
