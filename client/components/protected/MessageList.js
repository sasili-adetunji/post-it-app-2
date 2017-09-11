import React from 'react';
import MessageBox from './MessageBox';
import Message from './Message';

/**
 * Dashboard component.
 * @returns {void} The markup for the Dashboard component
 */
class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }
    /**
     * Creates an instance of Dashboard and renders the components
     * @memberOf Dashboard
     * @returns {void} The markup for the Dashboard
    */

  render() {
    const messageNodes = this.props.messages.map((message, i) => {
      return (
        <Message message={message} key={i} MessageId={this.props.messages[0]} readUser={this.props.readUsers} />
      );
    });
    return (
      <div className="container">
        <div className="row col-md-6">
          
            <div className="panel">
              <div className=" top-bar">
                <div className="col-md-8 col-xs-8">
                  <h3 className="panel-title"><span className="glyphicon glyphicon-comment" />
                    Group 1 Message </h3>
                </div>
              </div>
              {messageNodes}
              <MessageBox groupId={this.props.selectedGroup[0]} author={this.props.loggedInUser} />
            </div>
          
        </div>
      </div>
    );
  }
}
export default MessageList;
