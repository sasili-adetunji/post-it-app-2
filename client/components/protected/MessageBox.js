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
      error: ''
    };
    // this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  /**
   *
   * @param {any} e
   * @memberof MessageBox
   */
  // onChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  /**
   *
   *
   * @param {any} e
   * @memberof MessageBox
   */
  onClick(e) {
    e.preventDefault();
    if (!this.props.groupId) {
      this.setState({
        error: 'Please kindly select a group first',
      });
      this.refs.message.value = '';
    } else {
      const message = {
        message: this.refs.message.value.trim(),
        groupId: this.props.groupId.groupId,
        priorityLevel: this.refs.type.value.trim(),
        date: new Date().toJSON(),
        author: this.props.author.displayName
      };
      console.log(message);
      // PostItActions.addMessage(message);
      this.refs.message.value = '';
      this.refs.type.value = '';
      this.setState({
        error: ''
      });
    }
  }
  /**
   *
   * renders the messagebox components
   * @returns { void }
   * @memberof MessageBox
   */
  render() {
    return (
        <div className="sendMessageDiv">
          <strong className="error"> {this.state.error} </strong>
                            <form onSubmit={this.onClick}>
                                <div className="form-group col-sm-2">
                                    <select ref="type" className="form-control" id="exampleFormControlSelect1">
                                        <option>Normal</option>
                                        <option>Urgent</option>
                                        <option>Critical</option>
                                    </select>
                                </div>
                                <input ref='message' className="col-sm-10 sendMessageInput" placeholder='Enter a message' />
                            </form>
                        </div>
    );
  }
}
export default MessageBox;
