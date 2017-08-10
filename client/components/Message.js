import React from 'react';
import { ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import API from '../Api';


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
      <div>
        <ListItem>
          {this.props.message.messageText} - {this.props.message.isRead}
        </ListItem>
      </div>
    );
  }
}

export default Message;
