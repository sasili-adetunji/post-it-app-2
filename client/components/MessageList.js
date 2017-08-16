import React from 'react';
import { CardHeader, CardTitle, Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { List } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Message from './Message';


/**
 * Messagelist components
 *
 * @class MessageList
 * @extends {React.Component}
 */
class MessageList extends React.Component {

  /**
   * Creates an instance of MessageList.
   * @param {any} props
   * @memberof MessageList
   */
  constructor(props) {
    super(props);
  }

  render() {
    const messageNodes = this.props.messages.map((message, i) => {
      return (
        <Message message={message} key={i} />
      );
    });

    return (
      <MuiThemeProvider>
        <Card>
          <List>
            <CardTitle title="Messages" />
            {messageNodes}
          </List>
        </Card>
      </MuiThemeProvider>
    );
  }
}


export default MessageList;
