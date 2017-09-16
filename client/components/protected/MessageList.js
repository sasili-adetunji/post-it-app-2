import React from 'react';
import MessageBox from './MessageBox';
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
    const messageNodes = this.props.messages.map((message, i) => {
      return (
        <Message
          message={message} key={i} MessageId={this.props.messages[0]}
          readUser={this.props.readUsers} />
      );
    });
    return (
      <div>
        <div className=" top-bar">
          <div className="col-md-8 col-xs-8">
            <h4><span className="glyphicon glyphicon-comment" /> </h4>
          </div>
        </div>
        {messageNodes}
        <div> <h5> send Message to Group </h5> </div>
        <MessageBox groupId={this.props.selectedGroup[0]} author={this.props.loggedInUser} />
      </div>
    );
  }
}
export default MessageList;
