import React from 'react';
import PostItActions from '../../actions/PostItActions';
import PostItStore from '../../stores/PostItStore';
import * as Api from '../../Api';


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
* @param {object} event
*
* @returns {void}
*/
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
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
    if (!PostItStore.getOpenedGroup()[0]) {
      this.setState({
        error: { group: 'Please kindly select a group first' },
        message: ''
      });
    } else if (!this.state.message) {
      this.setState({
        error: { message : 'Kindly type your message first' }
      });
    } else if (!this.state.priorityLevel) {
       this.setState({
        error: { priorityLevel: 'priority level is required' }
      });
    }
     else {
      const message = {
        messageText: this.state.message,
        groupId: PostItStore.getOpenedGroup()[0].groupId,
        priorityLevel: this.state.priorityLevel,
        date: new Date().toJSON(),
        author: PostItStore.getLoggedInUser().data.userName
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
   * 
   * @memberof MessageBox
   */
  
  render() {
    return (
      <div className='messageForm'>
        <div className='error'> 
          {this.state.error.message}  
          {this.state.error.priorityLevel} {this.state.error.group}   
        </div>
        <form onSubmit={this.onClick}>
          <div className='row'>
            <div className='col-md-10'>
              <div className="input-group">
                <input name='message'
                  placeholder='Enter a message' onChange={this.onChange} 
                  value={this.state.message} 
                  type="text" className="form-control messageInput"/> 
              </div>
            </div>
            <div className='col-md-2'>
              <div className="form-group">
                <select className="form-control selectPriority"
                  name="priorityLevel"onChange={this.onChange} 
                  value={this.state.priorityLevel} >
                    <option value="normal">Normal</option>
                    <option value="critical">Critical</option>
                    <option value="urgent">Urgent</option>
                </select>
              </div>
            </div> 
          </div>
        </form> 
      </div>
    );
  }
}
export default MessageBox;
