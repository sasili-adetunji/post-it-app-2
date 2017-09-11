import React from 'react';
import PostItActions from '../../actions/PostItActions';
import PostItStore from '../../stores/PostItStore';


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
      priorityLevel: '',
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
      [e.target.name]: e.target.value
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
      priorityLevel: this.state.priorityLevel,
      date: new Date().toJSON(),
      author: this.props.author.displayName
    };
    PostItActions.addMessage(message);
    this.setState({
      message: '',
      date: '',
    });
  }
  render() {
    return (
      <div className="panel-footer">
        <div className="input-group">
          <input
          onChange={this.onChange} id="btn-input" type="text" className="form-control"
          placeholder="Write your message here..." name="message" value={this.state.message} />
          <select
            placeholder="Priority Level" name="priorityLevel" onChange={this.onChange}
            className="form-control" value={this.state.priorityLevel} >
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Critical">Critical</option>
          </select>
          <span className="input-group-btn">
            <button onClick={this.onClick} className="btn btn-primary btn-sm">Send</button>
          </span>
        </div>
      </div>
    );
  }
}
export default MessageBox;
