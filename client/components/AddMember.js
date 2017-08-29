import React from 'react';
import { CardHeader, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';
import _ from 'lodash';

let userName;

const style = {
  height: 100,
  width: 100,
  margin: '30px auto',
  padding: 30,
  textAlign: 'center',
  display: 'inline-block',
};
/**
 * Addmember component.
 * @returns {String} The markup for the addMember component
 */

class AddMember extends React.Component {
  /**
   * Creates an instance of AddMember.
   * @param {any} props
   * @memberof AddMembe
   */
  constructor(props) {
    super(props);
    this.state = {
      groupname: '',
      userId: '',
      users: PostItStore.getUsers()
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.userName = this.userName.bind(this);
    // this.makeUser = this.makeUser.bind(this);
    // this.users = this.users.bind(this);
  }

  /**
   * Monitors changes in the components and change the state
   * @param {any} e
   * @memberof AddMember
   */
  onChange(e) {
    e.preventDefault();
    // this.setState({
    //   [e.target.name]: e.target.value
    // });
    const user = _.map(this.state.users).map((x) => {
      console.log(x.username, '???????????');
      return x.username;
    });
  }

  /**
   * makes an action to add member
   *
   * @param {any} e
   * @memberof AddMember
   */
  onClick(e) {
    e.preventDefault();
    const user = {
      userId: this.state.userId,
      groupId: this.state.groupId
    };
    PostItActions.addUserToGroup(user);
  }
  // userName() {
  //   console.log('xxxxxxx');
  //   const user = _.map(this.state.users).map((x) => {
  //     console.log(x.username, '???????????');
  //     return x.username;
  //   });
  // }
  userName(e) {
    e.preventDefault();
    let userss = '';
    const user = _.map(this.state.users).map((x) => {
      userss = x.username;
    });
    console.log(userss, 'hhhhhhhh');
    // userss.map((name, index) => {
    //   return <option key={index}>{name} </option>;
    // });
  }
  makeUser() {
    console.log('xxxxxxx');
    (X) => {
      console.log(X, 'xxxxxxx');
      return this.userName.map(<option> {X} </option>);
    };
  }

  // users() {
  //   console.log(this.userName.map(this.makeUser), 'usssssssss');
  //   return this.userName.map(this.makeUser);
  // }


  /**
   * renders the addMember components
   *
   * @returns {void}
   * @memberof AddMember
   */
  render() {
    const user = _.map(this.state.users).map((x) => {
      return x.username;
    });
    return (
      // <TextField
      //      name="userId" onChange={this.userName}
      //   value={this.state.userId}
      //      floatingLabelText="User ID" />
      <select onChange={this.onChange} >
        {user.map((name, index) => {
          return <option value="user" key={index}>{name} </option>;
        })}
      </select>
    );
    // return (

    //   <div style={style}>
    //     <CardTitle title="Add" />
    //     <TextField
    //       name="groupId" onChange={this.onChange} value={this.state.groupId}
    //       floatingLabelText="Group ID" /><br />
    //     <TextField
    //       name="userId" onChange={this.onChange} value={this.state.userId}
    //       floatingLabelText="User ID" /><br />
    //     <select onChange={this.onChange}>
    //       <option value="user">{this.userName}</option>
    //     </select>
    //     <RaisedButton
    //       style={{
    //         display: 'block',
    //         width: '20px'
    //       }}
    //       onClick={this.onClick}
    //       label="Add" primary />
    //   </div>
    // );
  }

}

export default AddMember;
