import React from 'react';
import AddMember from './AddMember';
import User from './User';
import PostItStore from '../../stores/PostItStore';
import PostItActions from '../../actions/PostItActions';

/**
 * Dashboard component.
 * @returns {void} The markup for the Dashboard component
 */
class UserList extends React.Component {
    /**
     * Creates an instance of Dashboard and renders the components
     * @memberOf Dashboard
     * @returns {void} The markup for the Dashboard
    */
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      users: PostItStore.getUsers()
    };
    // this.onChange = this.onChange.bind(this);
    // this.onClick = this.onClick.bind(this);
  }
  // onChange(e) {
  //   e.preventDefault();
  //   // this.setState({
  //   //   [e.target.name]: e.target.value
  //   // });
  //   const user = _.map(this.state.users).map((x) => {
  //     console.log(x.username, '???????????');
  //     return x.username;
  //   });
  // }

  /**
   * makes an action to add member
   *
   * @param {any} e
   * @memberof AddMember
   */

  render() {
    const userNodes = this.props.user.map((user, i) => {
      return (
        <User user={user} key={i} />
      );
    });
    return (
      <div className="side-menu">
        <nav className="navbar navbar-default" role="navigation" >
          <div className="navbar-header">
            <div className="brand-wrapper">
              <AddMember groupId={this.props.selectedGroup[0]} user={this.props.usernames} />
            </div>
          </div>
          {userNodes}
        </nav>
      </div>
    );
  }
}
export default UserList;
