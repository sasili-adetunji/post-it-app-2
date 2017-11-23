import React from 'react';
import * as Api from '../../api';
import AppStore from '../../stores/AppStore';
import MessageList from './MessageList';
import GroupList from './GroupList';
import UserList from './UserList';
import WelcomeHeader from './WelcomeHeader';


/**
 * displays DashBoard components
 *
 * @class DashBoard
 *
 * @extends {React.Component}
 */
class Dashboard extends React.Component {
  /**
   * @description Creates an instance of Dashboard.
   * bind methods and set initial state.
   *
   * @memberof Dashboard
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      groups: AppStore.getGroupsUser(),
      users: AppStore.getUsersInGroup(),
      selectedGroup: AppStore.getOpenedGroup(),
      readUsers: AppStore.getReadUsers(),
      message: AppStore.getGroupsMessages(),
      userName: AppStore.getLoggedInUser(),
      user: AppStore.getUsers(),
    };
    this.onChange = this.onChange.bind(this);
  }

  /**
   * @method componentDidUnmount
   *
   * @description adds event Listener from the Store,
   * fetches Api call to get users and user groups
   *
   * @memberof Dashboard
  */
  componentDidMount() {
    Api.getUserGroups();
    Api.getUsers();
    AppStore.addChangeListener(this.onChange);
  }


  /**
   * @method componentWillUnmount
   *
   * @description removes event Listener from the Store
   *
   * @memberof Dashboard
  */
  componentWillUnmount() {
    AppStore.removeChangeListener(this.onChange);
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
      groups: AppStore.getGroupsUser(),
      users: AppStore.getUsersInGroup(),
      selectedGroup: AppStore.getOpenedGroup(),
      readUsers: AppStore.getReadUsers(),
      message: AppStore.getGroupsMessages(),
      userName: AppStore.getLoggedInUser(),
      user: AppStore.getUsers(),
    });
  }


  /**
  * @method render
  *
  * Render react component
  *
  * @returns {ReactElement} Dashboard markup
  *
  * @memberof Dashboard
  */
  render() {
    return (
      <div className="messageBoard">
        <div className="welcomeHeader">
          <WelcomeHeader user={this.state.userName} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-xs-12">
              <GroupList />
              <UserList
                groupName={AppStore.getOpenedGroup()[0]}
                users={AppStore.getUsersInGroup()}
              />
            </div>
            <div className="col-md-10 col-xs-12">
              <MessageList groupName={AppStore.getOpenedGroup()[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
