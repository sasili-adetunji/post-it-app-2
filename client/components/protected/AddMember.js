import React from 'react';
import lodash from 'lodash';

import PostItStore from '../../stores/PostItStore';
import PostItActions from '../../actions/PostItActions';


/**
 * Dashboard component.
 * @returns {void} The markup for the Dashboard component
 */
class AddMember extends React.Component {
    /**
     * Creates an instance of Dashboard and renders the components
     * @memberOf Dashboard
     * @returns {void} The markup for the Dashboard
    */
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.data = this.data.bind(this);
  }

  /**
   * monitors the state of the components state
   *
   * @param {any} e
   * @memberof MessageBox
   */
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  /**
   * makes an action call to post message
   *
   * @param {any} e
   * @memberof MessageBox
   */
  data(username) {
    let n;
    lodash.map(this.props.user.user).map((x) => {
      if (username === x.username) {
        n = x.userId;
      }
    });
    return n;
  }
  onClick(e) {
    e.preventDefault();
    const user = {
      userId: this.data(this.state.username),
      groupId: this.props.groupId.groupId
    };
    PostItActions.addUserToGroup(user);
  }
  render() {
    return (
      <div className="panel-body">
        <form className="navbar-form" role="search">
          <div className="form-group">
            <input
            type="text" className="form-control" placeholder="Add member"
            name="username" value={this.state.username} onChange={this.onChange} />
          </div>
          <button onClick={this.onClick} type="submit" className="btn btn-default "><span className="glyphicon glyphicon-plus" /></button>
        </form>
      </div>
    );
  }
}
export default AddMember;
