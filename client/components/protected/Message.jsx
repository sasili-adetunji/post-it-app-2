import React from 'react';
import * as API from '../../Api';
import PostItActions from '../../actions/PostItActions';
import PostItStore from '../../stores/PostItStore';


const Message = ({message}) => {
    let userNodes = null;
    userNodes = PostItStore.getReadUsers().map((eachUser, i) => {
      const user = [];
      user.push(eachUser.userName);
      return (
        <li style={{ display: 'inline' }} key={i} > {user}</li>
      );
    });
    return (
      <div className="msg_container_base">
        <div className="row msg_container base_sent">
          <div className="col-md-10 col-xs-10">
            <ul >
              <div className="messages msg_sent">
                <p> {message.messageText} </p>
                <time> Posted by {message.author} on 
                  {message.date}</time>
                <br />
                <time> This message is {message.status} </time> 
                <br />
                 <time> Read by <span> {userNodes} </span> </time> 
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
}
export default Message;
