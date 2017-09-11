import React from 'react';
import API from '../../Api';
import PostItActions from '../../actions/PostItActions';


/**
 *
 *
 * @class Message
 * @extends {React.Component}
 */
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  /**
   *
   * renders the message components
   * @returns {void}
   * @memberof Message
   */

  componentDidMount() {
    API.getUserReadUsers(this.props.message);
  }
  onClick() {
    API.getUserReadUsers(this.props.message);
  }
  render() {
    const userNodes = this.props.readUser.map((eachUser, i) => {
      const user = [];
      user.push(eachUser.userName);
      return (
        <li style={{ display: 'inline' }} key={i} > {user}</li>
      );
    });
    return (
      <div className="panel-body msg_container_base">
        <div className="row msg_container base_sent">
          <div className="col-md-10 col-xs-10">
            <ul onClick={this.onClick} >
              <div className="messages msg_sent">
                <p> { this.props.message.messageText } </p>
                <time> Posted by { this.props.message.author } on { this.props.message.date }</time> <br />
                <time> Read by <span> { userNodes } </span> </time>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Message;
