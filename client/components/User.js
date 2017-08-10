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
      <div>
        <ListItem
        href={`/#/dashboard/users/${this.props.user.userId}`}
      > {this.props.user.username} </ListItem>
      </div>
    );
  }
}

export default User;
