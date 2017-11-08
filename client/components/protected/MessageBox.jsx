import React from 'react';
import PostItActions from '../../actions/PostItActions';
import PostItStore from '../../stores/PostItStore';
import * as API from '../../Api';


/**
 * creates messagebox components
 *
 * @class MessageBox
 * 
 * @extends {React.Component}
 */
class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      priorityLevel: '',
      error: ''
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
* @param {object} event
*
* @returns {void}
*/
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


/**
 * @description Makes an action call to post message to a group
 * 
 * @param {object} event
 * 
 * @returns {void}
 * 
 * @memberof MessageBox
*/
  onClick(event) {
    event.preventDefault();
    if (!this.props.groupId) {
      this.setState({
        error: 'Please kindly select a group first',
        message: ''
      });
    } else {
      const message = {
        messageText: this.state.message,
        groupId: this.props.groupId.groupId,
        priorityLevel: this.state.priorityLevel,
        date: new Date().toJSON(),
        author: this.props.author.displayName
      };
      PostItActions.addMessage(message);
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
   * @returns {String} The HTML markup for the MessageBox Components
   * @memberof MessageBox
   */
  
  render() {
    return (
      <div className="sendMessageDiv">
        <strong className="error"> {this.state.error} </strong>
          <form onSubmit={this.onClick}>
              <div className="form-group col-sm-2">
                  <select name="priorityLevel" className="form-control" id="exampleFormControlSelect1"
                    onChange={this.onChange} value={this.state.priorityLevel}>
                      <option>Normal</option>
                      <option>Urgent</option>
                      <option>Critical</option>
                  </select>
              </div>
              <input name='message' className="col-sm-10 sendMessageInput"
                placeholder='Enter a message' onChange={this.onChange} value={this.state.message}/>
          </form>
      </div>
    );
  }
}
export default MessageBox;
