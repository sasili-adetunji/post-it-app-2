import React from 'react';
import firebase from 'firebase';
import toastr from 'toastr';
import AppActions from '../actions/AppActions';
import config from '../utils/firebase';


/**
 * @description gets user data and login a user
 *
 * @export
 *
 * @param {object} props
 *
 * @class Login
 *
 * @extends {Component}
 */
class Login extends React.Component {
  /**
  * @description Creates an instance of Login.
  * bind methods and set initial state.
  *
  * @memberof Login
  *
  * @param {object} props
  */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClickGoogle = this.onClickGoogle.bind(this);
  }
  /**
   * @method onChange
   *
   * @description Monitors changes in the components and change the state
   *
   * @memberof Login
   *
   * @param {SyntheticEvent} event
   *
   * @returns {void}
   */
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * @description Makes an action call to Sign in a user with email and password
   *
   * @param {SyntheticEvent} event
   *
   * @returns {void}
   *
   * @memberof Login
  */
  onClick(event) {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    if (!user.email) {
      this.setState({ errors: { email: 'Email is required' } });
    } else if (!user.password) {
      this.setState({ errors: { password: 'Password is required' } });
    } else {
      AppActions.login(user);
      this.setState({
        email: '',
        password: '',
        errors: '',
        success: '',
        isLoading: true
      });
    }
  }
  /**
    * @description Makes an action call to Sign in a user with with google
    *
    * @param {SyntheticEvent} event
    *
    * @returns {void}
    *
    * @memberof Login
 */
  onClickGoogle(event) {
    event.preventDefault();
    firebase.initializeApp(config);
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        AppActions.googleLogin(result.credential.idToken);
        this.setState({
          isLoading: true
        });
      }).catch(error => toastr.error(error.message));
  }


  /**
  * @description Render react component
  *
  * @method render
  *
	 * @return { ReactElement } rendered Login page markup
  *
  * @memberof Login
  */
  render() {
    const isLoading = () => {
      const loading = (
        this.state.isLoading ? <div id="loader" /> : <span />
      );
      return loading;
    };
    return (
      <div>
        <div className="container">
          {isLoading()}
          <div className="row">
            <div className="col-md-offset-3 col-md-6">
              <h1>Login</h1>
              <p>To continue using PostIt, you need to login below</p>
              <div className="error"> {this.state.errors.email}
                {this.state.errors.password}
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.onChange}
                    value={this.state.email}
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    value={this.state.password}
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  id="login"
                  className="btn btn-primary"
                  onClick={this.onClick}
                >Login</button>
              </form>
              <div className="clear" />
              <p> <a href="/#/forgotPassword"> Forgot Password?
            </a> </p>
              <div className="clear" />
              <button
                type="submit"
                id="google-sign-in"
                className="btn btn-default"
                onClick={this.onClickGoogle}
              >Sign in with Google </button>
              <br />
              <div className="clear" />
              <p> Dont have an account? <a href="/#/signup"> Register here
            </a> </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
