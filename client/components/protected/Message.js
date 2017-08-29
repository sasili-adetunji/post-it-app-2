import React from 'react';

/**
 *
 *
 * @class Message
 * @extends {React.Component}
 */
class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  /**
   *
   * renders the message components
   * @returns {void}
   * @memberof Message
   */
  render() {
    return (
      <div className="panel-body msg_container_base">
        <div className="row msg_container base_sent">
          <div className="col-md-10 col-xs-10">
            <ul>
              <div className="messages msg_sent">
                <p> { this.props.message.messageText } </p>
                <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Message;
