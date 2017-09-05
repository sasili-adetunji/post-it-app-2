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
          <li><span />
            {this.props.user.userName} </li>
      </div>
    );
  }
}
export default Message;
