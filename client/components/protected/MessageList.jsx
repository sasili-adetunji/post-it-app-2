import React from 'react';
import MessageBox from './MessageBox';
import Message from './Message';
import PostItStore from '../../stores/PostItStore';


/**
 * creates a messagelist components
 *
 * @class MessageList
 * @extends {React.Component}
 */
class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.onChange = this.onChange.bind(this);
  }
 
  /**
    * @method onChange
    * @description Monitors changes in the components and change the state
    * @memberof MessageList
    * @param {object} event
    * @returns {void}
    */

  onChange() {
    this.setState({
      message: PostItStore.getGroupsMessages()
    });
  }

  /**
   * @method componentDidMount
   * @description adds event Listener from the Store
   * @memberof MessageList
  */

  componentDidMount() {
    PostItStore.addChangeListener(this.onChange);
  }

  /**
   * @method componentWillUnmount
   * @description removes event Listener from the Store
   * @memberof MessageList
  */
  componentWillUnmount() {
    PostItStore.removeChangeListener(this.onChange);
  }

  /**
   * @method render
   * Render react component
   * 
   * @returns {String} The HTML markup for the MessageList Components
   * @memberof MessageList
   */

  render() {
    let messageNodes = null;
    if (this.props.selectedGroup.length === 0) {
      messageNodes = (<h2 className="messageHeader"> No Group Selected </h2>);
    } else if (this.state.message.length === 0) {
      messageNodes = (<h2 className="messageHeader"> No Message in Group </h2>);
    } else {
      messageNodes = this.state.message.map((message, i) => {
        return (
          <Message
            message={message} key={i} MessageId={this.state.message[0]}
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
