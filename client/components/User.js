import React from 'react';
import { ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import API from '../Api';

class User extends React.Component {
  /**
   * Creates an instance of User.
   * @param {any} props
   * @memberof User
   */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <ListItem
        href={`/#/dashboard/users/${this.props.user.userId}`}
      > {this.props.user.username}
        </ListItem>
      </MuiThemeProvider>

    );
  }
}

export default User;
