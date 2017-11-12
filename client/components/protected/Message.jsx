import React from 'react';
import * as API from '../../Api';
import PostItActions from '../../actions/PostItActions';
import PostItStore from '../../stores/PostItStore';


const Message = ({message}) => {
    return (
    <div className="message">
      <div className='row'>
        <div className='col-md-10'>
         <p> <b> {message.author} </b> </p>
        </div>
        <div className='col-md-2' id='priorityDisplay'>
          <p><i> {message.priorityLevel} </i></p>
        </div>
      </div> 
         <div className='row'>
        <div className='col-md-12'>
          <p> {message.messageText}</p>
        </div>
        </div>
       <div className='row'>
        <div className='col-md-10'>
          <p> {message.date}</p>
        </div>
        <div className='col-md-2'>
          
        </div>
      </div> 
      </div>
    );
}
export default Message;
