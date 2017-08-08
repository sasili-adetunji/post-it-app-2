import React from 'react';
import Drawer from 'material-ui/Drawer';
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
      messages: PostItStore.getMessages()


    };
  }
  _onChange() {
    this.setState(getAppState());
  }

  componentDidMount() {
    API.getUserGroups();
    API.getUsers();

    PostItStore.addChangeListener(this._onChange.bind(this));
  }

  componentUnmount() {
    PostItStore.removeChangeListener(this._onChange.bind(this));
  }


  render() {
    return (

      <div>
        <div className="col-sm-4">
          <UserList users={this.state.users} /> </div>
        <div className="col-sm-4">
          <GroupList groups={this.state.groups} /> </div>
        <div className="col-sm-4">
          <MessageList {...this.state} /> </div>

      </div>
    );
  }


}
export default DashContainer;
