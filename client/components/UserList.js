import React from 'react';
import { CardHeader, CardTitle, Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List } from 'material-ui/List';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';
import User from './User';


class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * renders the userlist components
   * @returns {void}
   * @memberof UserList
   */
  render() {
    const userNodes = this.props.users.map((user, i) => {
      return (
        <User user={user} key={i} />
      );
    });
    return (
      <MuiThemeProvider>
        <Card>
          <List>
            <CardTitle title="User List" />
            {userNodes}
          </List>
        </Card>
      </MuiThemeProvider>
    );
  }
        }


export default UserList;
