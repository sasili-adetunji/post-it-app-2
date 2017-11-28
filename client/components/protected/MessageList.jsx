import React from 'react';
import lodash from 'lodash';
import { Modal } from 'react-bootstrap';
import MessageBox from './MessageBox';
import Message from './Message';
import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';

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
      userName: '',
      userId: '',
      error: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeToUserId = this.changeToUserId.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }


/**
 * @description function that get userid from username
 *
 * @param {String} userName
 *
 * @returns {String}
 *
 * @memberof AddMember
 */
  changeToUserId(userName) {
    let userId;
    lodash.map(AppStore.getUsers()).map((user) => {
      if (userName === user.userName) {
        userId = user.userId;
      } else {
        return null;
      }
    });
    return userId;
  }


/**
* @method onChange
*
* @description Monitors changes in the components and change the state
*
* @memberof AddMember
*
* @param {SyntheticEvent} event
*
* @returns {void}
*/
  onChange(event) {
    this.setState({
      userName: event.target.value,
    });
  }


/**
 * @description add a member to a group if a group is selected and
 * username is not empty
 *
 * @param {SyntheticEvent} event
 *
 * @returns {void}
 *
 * @memberof AddMember
*/
  handleSubmit(event) {
    event.preventDefault();
    if (!AppStore.getOpenedGroup()[0]) {
      this.setState({
        error: 'Kindly select a group first',
      });
      return true;
    }
    const user = {
      userId: this.changeToUserId(this.state.userName),
      userName: this.state.userName,
      groupId: AppStore.getOpenedGroup()[0].groupId,
    };
    if (!user.userId) {
      this.setState({
        error: 'This User does not exist',
      });
    } else {
      AppActions.addUserToGroup(user);
      this.setState({
        error: '',
        userName: '',
        isOpen: false
      });
    }
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
* Handles close Modal event
*
* @param {SyntheticEvent} event
*
* @returns {void} void
*/
  closeModal(event) {
    event.preventDefault();
    this.setState({ isOpen: false });
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
            <div className="panel-body">
              <h6> To add a member, type the member username </h6>
              <div className="error"> {this.state.error} </div>
              <form onSubmit={this.handleSubmit} className="navbar-form" role="search">
                <div className="form-group">
                  <input
                    name="userName"
                    onChange={this.onChange}
                    value={this.state.userName}
                    type="text"
                    className="form-control"
                    placeholder="Add member"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary addMember"
                >
            Submit </button>
              </form>
              <br />
            </div>
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
