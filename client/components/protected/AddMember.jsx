import React from 'react';
import lodash from 'lodash';
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
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.changeToUserId = this.changeToUserId.bind(this);
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
    this.setState({
      userName: event.target.value,
    });
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
      });
      return true;
    }
    const user = {
      userId: this.changeToUserId(this.state.userName),
      userName: this.state.userName,
      groupId: AppStore.getOpenedGroup()[0].groupId,
    };
    if (!user.userId) {
      this.setState({
        error: 'This User does not exist',
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
 * @description function that get userid from username
 *
 * @param {String} userName
 *
 * @returns {String}
 *
 * @memberof AddMember
 */
  changeToUserId(userName) {
    let userId;
    lodash.map(AppStore.getUsers()).map((user) => {
      if (userName === user.userName) {
        userId = user.userId;
      } else {
        return null;
      }
    });
    return userId;
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
        <h6> To add a member, type the member username </h6>
        <div className="error"> {this.state.error} </div>
        <form className="navbar-form" role="search">
          <div className="form-group">
            <input
              name="userName"
              onChange={this.onChange}
              value={this.state.userName}
              type="text"
              className="form-control"
              placeholder="Add member"
            />
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
