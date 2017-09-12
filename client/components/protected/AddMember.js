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
      userId: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.data = this.data.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  /**
   * function that get userid from username
   *
   * @param {any} userName
   * @returns
   * @memberof AddMember
   */
  data(userName) {
    let n;
    lodash.map(this.props.user).map((x) => {
      if (userName === x.userName) {
        n = x.userId;
      }
    });
    return n;
  }
  onClick(e) {
    e.preventDefault();
    const user = {
      userId: this.data(this.state.userName),
      userName: this.state.userName,
      groupId: this.props.groupId.groupId
    };
    PostItActions.addUserToGroup(user);
  }
  /**
   *
   * renders add member components
   * @returns { void }
   * @memberof AddMember
   */
  render() {
    return (
      <div className="panel-body">
        <form className="navbar-form" role="search">
          <div className="form-group">
            <input
              type="text" className="form-control" placeholder="Add member"
              name="userName" value={this.state.userName} onChange={this.onChange} />
          </div>
          <button onClick={this.onClick} type="submit" className="btn btn-default ">
            <span className="glyphicon glyphicon-plus" /></button>
        </form>
      </div>
    );
  }
}
export default AddMember;
