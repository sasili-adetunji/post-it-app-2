import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { GridList, GridTile } from 'material-ui/GridList';
import MessageBox from './MessageBox';
import CreateGroup from './CreateGroup';
import AddMember from './AddMember';
import GroupList from './GroupList';
import UserList from './UserList';
import MessageList from './MessageList';
import PostItStore from '../stores/PostItStore';
import API from '../Api';


function getAppState() {
  return {
    errors: PostItStore.getErrors(),
    success: PostItStore.getSuccess(),
    loggedInUser: PostItStore.getLoggedInUser(),
    registeredUser: PostItStore.getRegisteredUser(),
    groups: PostItStore.getUserGroups(),
    selectedGroup: PostItStore.getOpenedGroup(),
    users: PostItStore.getUsers(),
    usersInGroup: PostItStore.getUsersInGroup(),
    messages: PostItStore.getMessages()


  };
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  body: {
    backgroundColor: '#edecec',
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: '2em',
  },
};

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 600,
    height: 500,
    overflowY: 'auto',
  },
};

class DashContainer extends React.Component {
  /**
   * Creates an instance of DashContainer.
   * @param {any} props
   * @memberof DashContainer
   */
  constructor(props) {
    super(props);
    this.state = {
      errors: PostItStore.getErrors(),
      success: PostItStore.getSuccess(),
      loggedInUser: PostItStore.getLoggedInUser(),
      registeredUser: PostItStore.getRegisteredUser(),
      groups: PostItStore.getUserGroups(),
      selectedGroup: PostItStore.getOpenedGroup(),
      users: PostItStore.getUsers(),
      usersInGroup: PostItStore.getUsersInGroup(),
      messages: PostItStore.getMessages()


    };
  }
  _onChange() {
    this.setState(getAppState());
  }

  /**
   * adds change listener, get users and usergroups from API
   * @memberof DashContainer
   */
  componentDidMount() {
    API.getUserGroups();
   // API.getUsersInGroup();
   // API.getUsers();

    PostItStore.addChangeListener(this._onChange.bind(this));
  }

  /**
   * removes changelistener
   * @memberof DashContainer
   */
  componentUnmount() {
    PostItStore.removeChangeListener(this._onChange.bind(this));
  }


  /**
   * renders components view
   * @returns {void}
   * @memberof DashContainer
   */
  render() {
    return (
      <div>
        <div className="col-sm-4">
          <GroupList groups={this.state.groups} /> </div>
        <div className="col-sm-4">
          <MessageList {...this.state} />
          <div>
            <MessageBox />
          </div>
        </div>
        <div className="col-sm-4">
          <UserList users={this.state.users} /> </div>
      </div>
    );
  }


}
export default DashContainer;
