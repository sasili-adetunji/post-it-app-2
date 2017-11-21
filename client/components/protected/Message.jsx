import React from 'react';

/**
 * @description Displays a list of users in a group
 *
 * @function Message
 *
 * @param {Object} message message details as props
 *
   * @returns {ReactElement}  Message markup  Components
 */
const Message = ({ message }) => (
  <div className="message">
    <div className="row">
      <div className="col-md-10">
        <p className="messageText"> <b> {message.author} </b> </p>
      </div>
      <div className="col-md-2" id="priorityDisplay">
        <p className="messageText"> <i> {message.priorityLevel} </i></p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <p className="messageText"> {message.messageText}</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-10">
        <small className="date"> {message.date}</small>
      </div>
      <div className="col-md-2" />
    </div>
  </div>
    );
export default Message;
