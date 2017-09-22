import React from 'react';
import MessageBox from './MessageBox';
import API from '../../Api';
import Message from './Message';

/**
 * creates a messagelist components
 *
 * @class MessageList
 * @extends {React.Component}
 */
class MessageList extends React.Component {
  /**
   *
   * renders messagelist components
   * @returns { void }
   * @memberof MessageList
   */
  render() {
    let messageNodes = null;
    if (this.props.selectedGroup.length === 0) {
      messageNodes = (<h4> No Group Selected </h4>);
    } else if (this.props.messages.length === 0) {
      messageNodes = (<h4> No Message in Group </h4>);
    } else {
      messageNodes = this.props.messages.map((message, i) => {
        return (
          <Message
            message={message} key={i} MessageId={this.props.messages[0]}
            readUser={this.props.readUsers} />
        );
      });
    }
    return (
      <div>
        <div className="message_list">
          <div className=" top-bar">
            <div className="col-md-8 col-xs-8">
              <h4><span className="glyphicon glyphicon-comment" /> </h4>
            </div>
          </div>
          {messageNodes}
        </div>
        <div className="message_box">
          <MessageBox groupId={this.props.selectedGroup[0]} author={this.props.loggedInUser} />
        </div>
      </div>
    );
  }
}
export default MessageList;
