import React from 'react';
import moment from 'moment';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';


/**
 * creates messagebox components
 *
 * @class MessageBox
 *
 * @extends {React.Component}
 */
class MessageBox extends React.Component {
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
      message: '',
      priorityLevel: '',
      error: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }


/**
* @method onChange
*
* @description Monitors changes in the components and change the state
*
* @memberof MessageBox
*
* @param {SyntheticEvent} event
*
* @returns {void}
*/
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


/**
 * @description Posts a message to the database if a group exists and message
 * is not empty
 *
 * @param {SyntheticEvent} event
 *
 * @returns {void}
 *
 * @memberof MessageBox
*/
  onClick(event) {
    event.preventDefault();
    if (!AppStore.getOpenedGroup()[0]) {
      this.setState({
        error: { group: 'Please kindly select a group first' },
        message: ''
      });
    } else if ((!this.state.message) || (!this.state.message.trim())) {
      this.setState({
        error: { message: 'Please enter a valid message' }
      });
    } else if (!this.state.priorityLevel) {
      this.setState({
        error: { priorityLevel: 'priority level is required' }
      });
    } else {
      const message = {
        messageText: this.state.message,
        groupId: AppStore.getOpenedGroup()[0].groupId,
        priorityLevel: this.state.priorityLevel,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        author: AppStore.getLoggedInUser().data.userName
      };
      AppActions.addMessage(message);
      this.setState({
        error: '',
        message: ''
      });
    }
  }


/**
* @method render
*
* Render MessageBox component
*
* @returns {ReactElement} MessageBox markup
*
* @memberof MessageBox
*/
  render() {
    return (
      <div className="messageForm">
        <div className="error">
          {this.state.error.message}
          {this.state.error.priorityLevel} {this.state.error.group}
        </div>
        <form>
          <div className="row">
            <div className="col-md-8 textArea">
              <div className="input-group">
                <input
                  name="message"
                  placeholder="Enter a message"
                  onChange={this.onChange}
                  value={this.state.message}
                  type="text"
                  className="form-control messageInput"
                  required
                />
              </div>
            </div>
            <div className="col-md-2 selectArea">
              <div className="form-group">
                <select
                  className="form-control selectPriority"
                  name="priorityLevel"
                  onChange={this.onChange}
                  value={this.state.priorityLevel}
                >
                  <option value="">Select priority</option>
                  <option value="normal">Normal</option>
                  <option value="critical">Critical</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>
            <div className="col-md-2">
              <button
                onClick={this.onClick}
                className="btn btn-primary btn-block sendButton"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default MessageBox;
