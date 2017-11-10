import React from 'react';
import lodash from 'lodash';
import PostItStore from '../../stores/PostItStore';
import PostItActions from '../../actions/PostItActions';


/**
 * creates addmember components
 *
 * @class AddMember
 * 
 * @extends {React.Component}
 */
class AddMember extends React.Component {
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
    * @param {object}
    *
    * @returns {void}
    */
  onChange(event) {
    this.setState({
      userName: event.target.value,
    });
  }


  /**
   * @description function that get userid from username
   *
   * @param {String} userName 
   * 
   * @memberof AddMember
   */
  changeToUserId(userName) {
    let userId;
    lodash.map(PostItStore.getUsers()).map((user) => {
      if (userName === user.userName) {
        userId = user.userId;
      } else {
        return null;
      }
    });
    return userId;
  }

   /**
     * @description Makes an action call to add a member to a group
     * 
     * @param {object} event
     * 
     * @returns {void}
     * 
     * @memberof AddMember
  */

  onClick(event) {
    event.preventDefault();
    if (!PostItStore.getOpenedGroup()[0]) {
      this.setState({
        error: 'Kindly select a group first',
        userName: '',
      });
      return true;
    }
    const user = {
      userId: this.changeToUserId(this.state.userName),
      userName: this.state.userName,
      groupId: PostItStore.getOpenedGroup()[0].groupId,
    };
    if (!user.userId) {
      this.setState({
        error: 'This User does not exist',
        userName: '',
      });
    } else {
      PostItActions.addUserToGroup(user);
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
   * @returns {String} The HTML markup for the AddMember Components
   * 
   * @memberof AddMember
   */
  render() {
    return (
      <div className="panel-body">
        <h6> To add a member, type in the username of the member </h6>
            <strong className="error"> {this.state.error} </strong>
        <form className="navbar-form" role="search">
          <div className="form-group">
            <input
              type="text" className="form-control" placeholder="Add member" 
              name="userName"
              onChange={this.onChange} value={this.state.userName}
              />
          </div>
          <button onClick={this.onClick} type="submit" 
          className="btn btn-default ">
            <span className="glyphicon glyphicon-plus" /></button>
        </form>
        <br />
      </div>
    );
  }
}
export default AddMember;
