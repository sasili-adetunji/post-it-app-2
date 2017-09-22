import React from 'react';
import AddMember from './AddMember';
import User from './User';
import PostItStore from '../../stores/PostItStore';
import PostItActions from '../../actions/PostItActions';


/**
 * creates userlist components
 * @class UserList
 * @extends {React.Component}
 */
class UserList extends React.Component {

  /** renders the message components
   * @returns { void }
   * @memberof UserList
   */

  render() {
    const userNodes = this.props.user.map((user, i) => {
      return (
        <User user={user} key={i} />
      );
    });
    return (
      <div>
        <div>
          <AddMember groupId={this.props.selectedGroup[0]} user={this.props.usernames} />
        </div>
        <div className="headerlist"> <h4> Members </h4> </div>
        {userNodes}
      </div>
    );
  }
}
export default UserList;
