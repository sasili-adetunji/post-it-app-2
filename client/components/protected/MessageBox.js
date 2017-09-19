import React from 'react';
import PostItActions from '../../actions/PostItActions';
import PostItStore from '../../stores/PostItStore';


/**
 * creates messagebox components
 *
 * @class MessageBox
 * @extends {React.Component}
 */
class MessageBox extends React.Component {

  /**
   * Creates an instance of MessageBox.
   * @param {any} props
   * @memberof MessageBox
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
   *
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
  /**
   *
   * renders the messagebox components
   * @returns { void }
   * @memberof MessageBox
   */
  render() {
    return (
      <div className="input-group message_area">
        <div> <h4> Send Message to Group </h4> </div>
        <textarea
rows="2" onChange={this.onChange} id="btn-input"
        type="text" className="form-control"
          placeholder="Write your message here..." name="message" value={this.state.message} />
        <div />
        <select
            placeholder="Priority Level" name="priorityLevel" onChange={this.onChange}
            className="form-control" value={this.state.priorityLevel} >
          <option value="Normal">Normal</option>
          <option value="Urgent">Urgent</option>
          <option value="Critical">Critical</option>
        </select>
        <span className="input-group-btn">
          <div>
            <button onClick={this.onClick} className="btn btn-primary btn-sm">Send</button>
          </div>
        </span>
      </div>
    );
  }
}
export default MessageBox;
