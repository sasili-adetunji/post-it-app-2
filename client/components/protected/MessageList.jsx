import React from 'react';
import { Modal } from 'react-bootstrap';
import MessageBox from './MessageBox';
import AddMember from './AddMember';
import Message from './Message';
import AppStore from '../../stores/AppStore';

/**
* A collection of message that displays the available messages
* on the message board
*
* @class MessageList
*
* @extends {React.Component}
*/
class MessageList extends React.Component {
/**
* @description Creates an instance of MessageBox.
* bind methods and set initial state.
*
* @memberof MessageBox
*
* @param {object} props
*/
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

/**
* Handles close Modal event
*
* @param {SyntheticEvent} event
*
* @returns {void} void
*/
  closeModal() {
    this.setState({ isOpen: false });
  }

/**
* Handles Open Modal event
*
* @param {SyntheticEvent} event
*
* @returns {void} void
*/
  openModal(event) {
    event.preventDefault();
    this.setState({ isOpen: true });
  }

/**
* Renders MessageList componet
*
* @returns {ReactElement} MessageList markup
*/
  render() {
    let messageNodes = null;
    let groupName = null;
    if (AppStore.getOpenedGroup().length === 0) {
      messageNodes = (<div> <h2 className="messageHeader"> No Group Selected
         </h2> </div>);
    } else if (AppStore.getGroupsMessages().length === 0) {
      groupName = (<div> <h4> Group | &nbsp;
        {AppStore.getOpenedGroup()[0].groupName}
      </h4> </div>);
      messageNodes = (<div> <h2 className="messageHeader"> No Message in Group
        </h2> </div>);
    } else {
      groupName = (<div> <h4> Group | &nbsp;
        {AppStore.getOpenedGroup()[0].groupName}
      </h4> </div>);
      messageNodes = AppStore.getGroupsMessages().map((message, i) => (
        <Message
          message={message}
          key={i}
          MessageId={AppStore.getGroupsMessages()[0]}
          readUser={AppStore.getReadUsers()}
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
            <a onClick={this.openModal}> <b> Add new Member </b> </a>
          </div>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Body>
            <AddMember />
          </Modal.Body>
          <Modal.Footer>
            <a onClick={this.closeModal}> Close</a>
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
