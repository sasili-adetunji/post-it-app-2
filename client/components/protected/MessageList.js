import React from 'react';
import MessageBox from './MessageBox';
import API from '../../Api';
import Message from './Message';
import MessageHeader from './MessageHeader';

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
      messageNodes = (<h2 className="messageHeader"> No Group Selected </h2>);
    } else if (this.props.messages.length === 0) {
      messageNodes = (<h2 className="messageHeader"> No Message in Group </h2>);
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
                        <div className="viewMessage" id="mesa">
                            {messageNodes} 
                        </div>
                        <div id="footer">
                       <MessageBox groupId={this.props.selectedGroup[0]} author={this.props.loggedInUser} /> 
                      </div>
                    </div>
            
    );
  }
}
export default MessageList;
