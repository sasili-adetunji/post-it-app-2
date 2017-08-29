import React from 'react';
import PostItActions from '../../actions/PostItActions';


/**
 * Dashboard component.
 * @returns {void} The markup for the Dashboard component
 */
class MessageBox extends React.Component {
    /**
     * Creates an instance of Dashboard and renders the components
     * @memberOf Dashboard
     * @returns {void} The markup for the Dashboard
    */
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      priorityLevel: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  /**
   * monitors the state of the components state
   *
   * @param {any} e
   * @memberof MessageBox
   */
  onChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  /**
   * makes an action call to post message
   *
   * @param {any} e
   * @memberof MessageBox
   */
  onClick(e) {
    e.preventDefault();
    const message = {
      message: this.state.message,
      groupId: this.props.groupId.groupId,
      priorityLevel: this.state.priorityLevel
    };
    PostItActions.addMessage(message);
    this.setState({
      message: '',
      priorityLevel: ''
    });
  }
  render() {
    return (
      <div className="panel-footer">
        <div className="input-group">
          <input
          onChange={this.onChange} id="btn-input" type="text" className="form-control input-sm chat_input"
          placeholder="Write your message here..." name="message" value={this.state.message} />
          <select
            placeholder="Priority Level" name="priorityLevel" onChange={this.onChange}
            className="form-control">
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Critical">Critical</option>
          </select>
          <span className="input-group-btn">
            <button onClick={this.onClick} className="btn btn-primary btn-sm" id="btn-chat">Send</button>
          </span>
        </div>
      </div>
    );
  }
}
export default MessageBox;
