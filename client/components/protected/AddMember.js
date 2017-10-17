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
      error: ''
    };
    // this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.data = this.data.bind(this);
  }

  // onChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  /**
   * function that get userid from username
   *
   * @param {any} userName
   * @returns
   * @memberof AddMember
   */
  data(userName) {
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
  onClick(event) {
    event.preventDefault();
    if (!this.props.selected[0]) {
      this.setState({
        error: 'Kindly select a group first',
      });
      this.refs.add.value= '';
      return true;
    }
    const user = {
      userId: this.data(this.refs.add.value.trim()),
      userName: this.refs.add.value.trim(),
      groupId: this.props.selected[0].groupId
    };

    if (!user.userId) {
      this.setState({
        error: 'This User does not exist'
      });
      this.refs.add.value= '';
    } else {
      PostItActions.addUserToGroup(user);
      // console.log(user);
      this.refs.add.value = '';
      this.setState({
        error: ''
      });
    }
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
        <h6> To add a member, type in the username of the member </h6>
            <strong className="error"> {this.state.error} </strong> 
        <form className="navbar-form" role="search">
          <div className="form-group">
            <input
              type="text" ref="add" className="form-control" placeholder="Add member"
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
