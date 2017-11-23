import React from 'react';
import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';


/**
 * displays addmember components
 *
 * @class AddMember
 *
 * @extends {React.Component}
 */
class AddMember extends React.Component {
	/**
		* Creates an instance of AddMember
		*
		* @param {object} props
		*
		* @memberof AddMember
	*/

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userId: '',
      error: '',
      searchUser: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }


  /**
    * @method onChange
    *
    * @description Monitors changes in the components and change the state
    *
    * @memberof AddMember
    *
    * @param {SyntheticEvent} event
    *
    * @returns {void}
  */
  onChange(event) {
    if (event.target.value !== '') {
      this.setState({
        searchUser: '',
        userName: event.target.value,
      });
      if (this.state.userName !== '') {
        AppActions.searchUsers(this.state.userName);
        this.setState({
          searchUser: AppStore.getSearchedUsers().userName
        });
      } else {
        AppActions.clearSearch();
        this.setState({
          searchUser: 'No user found'
        });
      }
    } else {
      this.setState({
        searchUser: '',
        userName: '',
      });
    }
  }


	/**
	 * @description add a member to a group if a group is selected and
	 * username is not empty
	 *
	 * @param {SyntheticEvent} event
	 *
	 * @returns {void}
	 *
	 * @memberof AddMember
	*/
  onClick(event) {
    event.preventDefault();
    if (!AppStore.getOpenedGroup()[0]) {
      this.setState({
        error: 'Kindly select a group first',
        userName: '',
      });
      return true;
    }
    const user = {
      userName: AppStore.getSearchedUsers().userName || this.state.userName,
      groupId: AppStore.getOpenedGroup()[0].groupId,
      userId: AppStore.getSearchedUsers().userId,
    };
    if (!this.state.userName) {
      this.setState({
        error: 'user name is required',
      });
    } else {
      AppActions.addUserToGroup(user);
      this.setState({
        error: '',
        userName: '',
      });
    }
  }


	/**
	 * @method render
	 *
	 * Render addmember component
	 *
	 * @returns {ReactElement} AddMember markup
	 *
	 * @memberof AddMember
	 */
  render() {
    return (
      <div className="panel-body">
        <h6> To add a member, search with username </h6>
        <div className="error"> {this.state.error} </div>
        <form className="navbar-form" role="search">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add member"
              name="userName"
              onChange={this.onChange}
              value={this.state.userName}
              list="browsers"
            />
            <datalist id="browsers">
              <option value={this.state.searchUser} />
            </datalist>
          </div>
          <button
            onClick={this.onClick}
            type="submit"
            className="btn btn-primary addMember"
          >
            Submit </button>
        </form>
        <br />
      </div>
    );
  }
}
export default AddMember;
