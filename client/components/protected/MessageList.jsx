import React from 'react';
import lodash from 'lodash';
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
    this.openCreateGroupModal = this.openCreateGroupModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.changeToUserId = this.changeToUserId.bind(this);
  }


/**
* @method onChange
*
* @description Monitors changes in the components and change the state
*
* @memberof MessageList
*
* @param {SyntheticEvent} event
*
* @returns {void}
*/
  onChange(event) {
    this.setState({
      userName: event.target.value
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
 * @memberof MessageList
*/

  onClick(event) {
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
      });
    }
  }


 /**
   * @description describes a function that dynamically
   * controls the behaviour of a modal
   *
   * @param { string } event
   *
   * @return { void }
   *
   * @memberof MessageList
   */
  openCreateGroupModal = (event) => {
    event.preventDefault();
    const $myModal = $('#modal');
    $myModal.modal();
  }


/**
 * @description function that get userid from username
 *
 * @param {String} userName
 *
 * @returns {String}
 *
 * @memberof MessageList
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
            <a onClick={this.openCreateGroupModal}> <b> Add new Member </b> </a>
          </div>
        </div>
        <div
          className="modal fade modal2"
          id="modal"
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                >
                    &times;
                      </button>
                <h4 className="modal-title">
                    Add Member
                      </h4>
                <div className="error"> {this.state.error} </div>
              </div>
              <div className="modal-body">
                <input
                  name="userName"
                  onChange={this.onChange}
                  value={this.state.userName}
                  type="text"
                  className="form-control"
                  placeholder="Add member"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                    Close
                      </button>
                <button
                  onClick={this.onClick}
                  type="submit"
                  id="submit"
                  className="btn btn-success"
                > Submit </button>
              </div>
            </div>
          </div>
        </div>
        <div className="messages">
          {messageNodes}
        </div>
        <MessageBox />
      </div>
    );
  }
}
export default MessageList;
