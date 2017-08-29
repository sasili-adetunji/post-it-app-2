import React from 'react';

/**
 *
 * @class Message
 * @extends {React.Component}
 */
class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   *
   * renders the message components
   * @returns {void}
   * @memberof Message
   */

  render() {
    return (
      <div className="side-menu-container">
        <ul className="nav navbar-nav">
          <li><span className="glyphicon glyphicon-user" />
            {this.props.user.username} </li>
        </ul>
      </div>
    );
  }
}
export default Message;
