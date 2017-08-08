import React from 'react';
import { CardHeader, CardTitle, Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { CircularProgress } from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';

import Message from './Message';
import { List } from 'material-ui/List';


class MessageList extends React.Component {
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
      <div>
        <List>
          <CardTitle title="Messages" />

          {messageNodes}
        </List>
      </div>
    );
  }
    }


export default MessageList;
