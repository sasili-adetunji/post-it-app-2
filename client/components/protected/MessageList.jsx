import React from 'react';
import MessageBox from './MessageBox';
import Message from './Message';
import PostItStore from '../../stores/PostItStore';

/**
 * @description Displays a list of users in a group
 * 
 * @function MessageList
 * 
 * @returns {JSX} list of messages in a group
 */

const MessageList = () => {
    let messageNodes = null;
    if (PostItStore.getOpenedGroup().length === 0) {
      messageNodes = (<h2 className="messageHeader"> No Group Selected </h2>);
    } else if (PostItStore.getGroupsMessages().length === 0) {
      messageNodes = (<h2 className="messageHeader"> No Message in Group </h2>);
    } else {
      messageNodes = PostItStore.getGroupsMessages().map((message, i) => {
        return (
          <Message
            message={message} key={i} 
            MessageId={PostItStore.getGroupsMessages()[0]}
            readUser={PostItStore.getReadUsers()} />
        );
      });
    }
    return (
      <div>
        <div className="viewMessage" id="mesa">
          {messageNodes} 
        </div>
        <div id="footer">
          <MessageBox groupId={PostItStore.getOpenedGroup()[0]} /> 
        </div>
      </div>
            
    );
}
export default MessageList;
