import React from 'react';
import NavBar from './NavBar';
import PostItActions from '../actions/PostItActions';
import { Link } from 'react-router-dom';

import PostItStore from '../stores/PostItStore';

class ForgotPassword extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
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
     * @description Makes an action call to reset password
     * @param {object} event
     * @returns {void}
     * @memberof Login
  */
  onClickReset (event) {
    event.preventDefault();
    const email =
      {
        email: this.state.email
      };
      if (!email.email) 
        this. setState({ error: 'Email is required' })
     else {
    PostItActions.resetPassword(email);
    this.setState({ errors: '', email: '' });
     }
  }
render () {
  return (
    <div>
        <NavBar />
            <div className="login-container">
                <h1>Password Reset</h1>
                    <p>To request a new password, type in your email below</p>
                <div className='error'> 
                    {this.state.error}  
                </div>                
                <form>
                    <div className="form-group">
                        <label> Email address</label>
                        <input type="email" className="form-control" 
                                 name="email" onChange={this.onChange} 
                                value={this.state.email} placeholder="Email" />
                    </div>
                    <button type="submit" className="btn btn-default"
                        onClick={this.onClickReset} >Submit</button>
                </form>
                <div className="clear"> </div>
                <p> <Link to="/signin"> Back to Login 
                </Link> </p>
            </div>
    </div>
    );
}
}

export default ForgotPassword;
