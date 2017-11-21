import React from 'react';
import PostItActions from '../actions/PostItActions';

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
  * @description Monitors changes in the components and update the state
  *
  * @memberof Forgot Password
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
 *
 * @param {object} event
 *
 * @returns {void}
 *
 * @memberof Login
*/
  onClickReset(event) {
    event.preventDefault();
    const email =
      {
        email: this.state.email
      };
    if (!email.email) {
      this.setState({ error: 'Email is required' });
    } else {
      PostItActions.resetPassword(email);
      this.setState({ errors: '', email: '' });
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" />
          <div className="col-md-offset-3 col-md-6">

            <h1>Password Reset</h1>
            <p>To request a new password, type in your email below</p>
            <div className="error">
              {this.state.error}
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="email"> Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={this.onChange}
                  value={this.state.email}
                  placeholder="Email"
                />
              </div>
              <button
                type="submit"
                className="btn btn-default"
                onClick={this.onClickReset}
              >Submit</button>
            </form>
            <div className="clear" />
            <p> <a href="/#/signin"> Back to Login
                </a> </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
