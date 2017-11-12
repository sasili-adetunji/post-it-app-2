import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';
import config from '../../server/app/config/database';
import NavBar from './NavBar';

/**
 * 
 * @description gets user data and login a user
 * @export
 * @param {object} props
 * @class Login
 * @extends {Component}
 */

class Login extends React.Component {
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
    * @param {object} event
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
 * @param {object} event
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
      this.setState({ errors: { email: 'Email is required' } })
    } else if (!user.password) {
        this. setState({ errors: { password: 'Password is required' } })
    } else {
    PostItActions.login(user);
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
     * @param {object} event
     * @returns {void}
     * @memberof Lofin
  */
  onClickGoogle(event) {
    event.preventDefault();
    firebase.initializeApp(config);
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      PostItActions.googleLogin(result);
      this.setState({
        isLoading: true
      });
    })
  }
 

   /**
   * @method render
   * Render react component
   * 
   * @returns {String} The HTML markup for the Register
   * @memberof Register
   */

  render() {
    const isLoading = () => {
      const loading = (
        this.state.isLoading ? <div id="loader"></div> : <span></span>
      );
      return loading;
    }
    return (
      <div>
        <NavBar />
        <div className="login-container">
            {isLoading()}
          <h1>Login</h1>
          <p>To continue using PostIt, you need to login below</p>
        <div className='error'> {this.state.errors.email}  
          {this.state.errors.password}   
      </div>
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" 
              name="email" onChange={this.onChange} 
              value={this.state.email} placeholder="Email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" 
               name="password" onChange={this.onChange} 
              value={this.state.password} placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-default"
            onClick={this.onClick} >Submit</button>
          </form>
          <div className="clear"> </div>
           <p> <Link to="/forgotPassword"> Forgot Password? 
            </Link> </p>
          <div className="clear"> </div>
          <GoogleButton onClick={this.onClickGoogle} />
          <br />
          <div className="clear"> </div>
          <p> Don't have an account? <Link to="/signup"> Register here 
            </Link> </p>
        </div>
      </div>
    );
  }
}
export default Login;
