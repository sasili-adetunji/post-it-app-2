import React from 'react';
import MessageBox from './MessageBox';
import API from '../../Api';
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
   *
   * renders messagelist components
   * @returns { void }
   * @memberof MessageList
   */

  onChange() {
    this.setState({
      message: PostItStore.getGroupsMessages()
    });
  }
  componentDidMount() {
    PostItStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    PostItStore.removeChangeListener(this.onChange);
  }

  render() {
    // console.log(PostItStore.getGroupsMessages());
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
