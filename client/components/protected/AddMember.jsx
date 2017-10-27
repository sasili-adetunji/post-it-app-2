import React from 'react';
import lodash from 'lodash';
import PostItStore from '../../stores/PostItStore';
import PostItActions from '../../actions/PostItActions';


/**
 * creates addmember components
 *
 * @class AddMember
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
    this.changeToUserid = this.changeToUserid.bind(this);
  }

  /**
    * @method onChange
    * @description Monitors changes in the components and change the state
    * @memberof AddMember
    * @param {object}
    * @returns {void}
    */

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  /**
   * function that get userid from username
   *
   * @param {any} userName
   * @returns
   * @memberof AddMember
   */
  changeToUserid(userName) {
    let n;
    lodash.map(this.props.usern).map((x) => {
      if (userName === x.userName) {
        n = x.userId;
      } else {
        return null;
      }
    });
    return n;
  }

   /**
     * @description Makes an action call to add a member to a group
     * @param {object} event
     * @returns {void}
     * @memberof AddMember
  */

  onClick(event) {
    event.preventDefault();
    if (!this.props.selected[0]) {
      this.setState({
        error: 'Kindly select a group first',
        userName: '',
      });
      return true;
    }
    const user = {
      userId: this.changeToUserid(this.state.userName),
      userName: this.state.userName,
      groupId: this.props.selected[0].groupId,
    };
    if (!user.userId) {
      this.setState({
        error: 'This User does not exist',
        userName: '',
      });
    } else {
      console.log(user)
      PostItActions.addUserToGroup(user);
      this.setState({
        error: '',
        userName: '',
      });
    }
  }
 /**
   * @method render
   * Render react component
   *
   * @returns {String} The HTML markup for the AddMember Components
   * @memberof AddMember
   */
  render() {
    console.log(PostItStore.getUsers());
    return (
      <div className="panel-body">
        <h6> To add a member, type in the username of the member </h6>
            <strong className="error"> {this.state.error} </strong>
        <form className="navbar-form" role="search">
          <div className="form-group">
            <input
              type="text" className="form-control" placeholder="Add member" name="userName"
              onChange={this.onChange} value={this.state.userName}
              />
          </div>
          <button onClick={this.onClick} type="submit" className="btn btn-default ">
            <span className="glyphicon glyphicon-plus" /></button>
        </form>
        <br />
      </div>
    );
  }
}
export default AddMember;
