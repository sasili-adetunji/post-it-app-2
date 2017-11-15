import React from 'react';
import * as Api from '../../Api';
import NavBar from '../NavBar';
import PostItStore from '../../stores/PostItStore';
import MessageList from './MessageList';
import GroupList from './GroupList';
import UserList from './UserList';
import WelcomeHeader from './WelcomeHeader';


/**
 * creates dashboard components
 *
 * @class Dashboard
 *
 * @extends {React.Component}
 */
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: PostItStore.getLoggedInUser(),
      groups: PostItStore.getGroupsUser(),
      users: PostItStore.getUsersInGroup(),
      selectedGroup: PostItStore.getOpenedGroup(),
      readUsers: PostItStore.getReadUsers(),
      message: PostItStore.getGroupsMessages(),
      userName: PostItStore.getLoggedInUser(),
      user: PostItStore.getUsers(),
    };
    this.onChange = this.onChange.bind(this);
  }

/**
 * @method componentDidUnmount
 *
 * @description adds event Listener from the Store,
 * fetches Api call to get users and user groups
 *
 * @memberof MessageList
*/
  componentDidMount() {
    Api.getUserGroups();
    Api.getUsers();
    PostItStore.addChangeListener(this.onChange);
  }


/**
 * @method componentWillUnmount
 *
 * @description removes event Listener from the Store
 *
 * @memberof Dashboard
*/
  componentWillUnmount() {
    PostItStore.removeChangeListener(this.onChange);
  }

/**
* @method onChange
*
* @description Monitors changes in the components and change the state
*
* @memberof Dashboard
*
* @param {object}
*
* @returns {void}
*/
  onChange() {
    this.setState({
      groups: PostItStore.getGroupsUser(),
      users: PostItStore.getUsersInGroup(),
      selectedGroup: PostItStore.getOpenedGroup(),
      readUsers: PostItStore.getReadUsers(),
      message: PostItStore.getGroupsMessages(),
      userName: PostItStore.getLoggedInUser(),
      user: PostItStore.getUsers(),
    });
  }


/**
* @method render
*
* Render react component
*
* @returns {String} The HTML markup for the MessageList Components
*
* @memberof Dashboard
*/
  render() {
    return (
      <div className="messageBoard">
        <NavBar />
        <div className="container">
          <div className="welcomeHeader">
            <WelcomeHeader user={this.state.userName} />
          </div>
          <div className="row">
            <div className="col-md-2 col-xs-12">
              <GroupList />
              <UserList
                groupName={PostItStore.getOpenedGroup()[0]}
                users={PostItStore.getUsersInGroup()}
              />
            </div>
            <div className="col-md-10 col-xs-12">
              <MessageList groupName={PostItStore.getOpenedGroup()[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
