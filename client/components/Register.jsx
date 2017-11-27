import React from 'react';
import AppActions from '../actions/AppActions';


/**
 * @description gets user data and register a user
 *
 * @param {object} props
 *
 * @class Register
 *
 * @extends {Component}
 */
class Register extends React.Component {
/**
* @description Creates an instance of Register.
* bind methods and set initial state.
*
* @memberof Register
*
* @param {object} props
*/
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      phoneNumber: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }


/**
* @method onChange
*
* @description Monitors changes in the components and change the state
*
* @memberof Register
*
* @param {SyntheticEvent} event
*
* @returns {void}
*/
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


/**
 * @description Makes an action call to register a user with email and
 * password when all field are filled
 *
 * @param {SyntheticEvent} event
 *
 * @returns {void}
 *
 * @memberof Register
*/
  handleSubmit(event) {
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
      AppActions.registerUser(user);

      // clears the state

      this.setState({
        errors: {}
      });
    }
  }


/**
* @description Render react component
*
* @method render
*
* @return { ReactElement } rendered Register page markup
*
* @memberof Register
*/
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" />
          <div className="col-md-offset-3 col-md-6">
            <h1>Sign Up</h1>
            <p>To continue using PostIt, you need to sign up below</p>
            <div className="error">
              {this.state.errors.email}
              {this.state.errors.password} {this.state.errors.phoneNumber}
              {this.state.errors.userName}
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email"> Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={this.onChange}
                  value={this.state.email}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="username"> Username</label>
                <input
                  className="form-control"
                  id="username"
                  name="userName"
                  onChange={this.onChange}
                  value={this.state.userName}
                  placeholder="Username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  className="form-control"
                  name="phoneNumber"
                  onChange={this.onChange}
                  id="phoneNumber"
                  pattern="[234][0-9]{12}"
                  title="It will contain 13 numbers and must start with 234"
                  value={this.state.phoneNumber}
                  placeholder="234XXXXXXXXXX"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  pattern=".{6,}"
                  title="Six or more characters"
                  onChange={this.onChange}
                  value={this.state.password}
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
              >Register</button>
            </form>
            <div className="clear" />
            <p> Already have an account? <a href="/#/signin"> Login here
            </a> </p>
          </div>
        </div>
      </div>
    );
  }

}
export default Register;
