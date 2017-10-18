import React from 'react';


/**
 * creates message components
 * @class Message
 * @extends {React.Component}
 */
class Message extends React.Component {

  /**
   * renders message components
   * @returns { void }
   * @memberof Message
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
