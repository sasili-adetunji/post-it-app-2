import React from 'react';
import { CardHeader, CardTitle, Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { CircularProgress } from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';

import User from './User';
import { List } from 'material-ui/List';


class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.users) {
      return (
        <Card style={{
          flexGrow: 1
        }}>
          <CircularProgress
            mode="indeterminate"
            style={{
              paddingTop: '20px',
              paddingBottom: '20px',
              margin: '0 auto',
              display: 'block',
              width: '60px'
            }}
          />
        </Card>
      );
    }
    const userNodes = this.props.users.map((user, i) => {
      return (
        <User user={user} key={i} />
      );
    });
    console.log('UserList------', this.props.users);

    return (
      <div>
        <List>
          <CardTitle title="User List" />

          {userNodes}
        </List>
      </div>
    );
  }
    }


export default UserList;
