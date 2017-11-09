import React from 'react';
import * as API from '../../Api';
import PostItActions from '../../actions/PostItActions';
import PostItStore from '../../stores/PostItStore';


/**
 * createa Message components
 *
 * @class Message
 * 
 * @extends {React.Component}
 */
class Message extends React.Component {

/**
 * @method render
 * 
 * Render react component
 * 
 * @returns {String} The HTML markup for the Message Components
 * 
 * @memberof Message
 */
  render() {
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
                <p> {this.props.message.messageText} </p>
                <time> Posted by {this.props.message.author} on 
                  {this.props.message.date}</time>
                <br />
                <time> This message is {this.props.message.status} </time> 
                <br />
                 <time> Read by <span> {userNodes} </span> </time> 
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Message;
