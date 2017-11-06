import React from 'react';

/**
 * creates user component
 * @class User
 * @extends {React.Component}
 */
class Message extends React.Component {

  /**
 * Displays the List of Users in a group
 * @param props
 * @export
 * @class User
 * @extends {Component}
 */

  render() {
    return (
      <div className="side-menu-container list-group-item">
        <li><span />
          <b> {this.props.user.userName} </b> </li>
      </div>
    );
  }
}
export default Message;
