import React from 'react';
import { Modal } from 'react-bootstrap';
import MessageBox from './MessageBox';
import AddMember from './AddMember';
import Message from './Message';
import PostItStore from '../../stores/PostItStore';

/**
 * @description Displays a list of users in a group
 *
 * @function MessageList
 *
 * @returns {JSX} list of messages in a group
 */

class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAddUser: false,
    };
    this.closeGroup1 = this.closeGroup1.bind(this);
    this.openGroup1 = this.openGroup1.bind(this);
  }
  closeGroup1() {
    this.setState({ showAddUser: false });
  }
  openGroup1() {
    this.setState({ showAddUser: true });
  }
  render() {
    let messageNodes = null;
    let groupName = null;
    if (PostItStore.getOpenedGroup().length === 0) {
      messageNodes = (<div> <h2 className="messageHeader"> No Group Selected
         </h2> </div>);
    } else if (PostItStore.getGroupsMessages().length === 0) {
      messageNodes = (<div> <h2 className="messageHeader"> No Message in Group
        </h2> </div>);
    } else {
      groupName = (<div> <h4> { PostItStore.getOpenedGroup()[0].groupName}
      </h4> </div>);
      messageNodes = PostItStore.getGroupsMessages().map((message, i) => (
        <Message
          message={message}
          key={i}
          MessageId={PostItStore.getGroupsMessages()[0]}
          readUser={PostItStore.getReadUsers()}
        />
        ));
    }
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            {groupName}
          </div>
          <div className="col-md-2">
            <a onClick={this.openGroup1}> <b> Add new Member </b> </a>
          </div>
        </div>
        <Modal show={this.state.showAddUser} onHide={this.closeGroup1}>
          <Modal.Body>
            <AddMember />
          </Modal.Body>
          <Modal.Footer>
            <a onClick={this.closeGroup1}> Close</a>
          </Modal.Footer>
        </Modal>
        <div className="messages">
          {messageNodes}
        </div>
        <MessageBox />
      </div>
    );
  }
}
export default MessageList;
