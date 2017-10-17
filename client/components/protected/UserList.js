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
    const userNodes = this.props.use.map((user, i) => {
      return (
        <User user={user} key={i} />
      );
    });
    return (
      <div>
        <div className="headerlist"> <h4 className="card-header"> Members </h4> </div>
        <div className="userList">
        {userNodes}
        </div>
      </div>
    );
  }
}
export default UserList;
