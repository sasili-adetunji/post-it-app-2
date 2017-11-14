import React from 'react';

const Message = ({ message }) => (
  <div className="message">
    <div className="row">
      <div className="col-md-10">
        <p> <b> {message.author} </b> </p>
      </div>
      <div className="col-md-2" id="priorityDisplay">
        <p><i> {message.priorityLevel} </i></p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <p> {message.messageText}</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-10">
        <p> {message.date}</p>
      </div>
      <div className="col-md-2" />
    </div>
  </div>
    );
export default Message;
