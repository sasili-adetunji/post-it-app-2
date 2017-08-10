import React from 'react';
import { CardHeader, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import PostItActions from '../actions/PostItActions';


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
      userId: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  /**
   * Monitors changes in the components and change the state
   * @param {any} e
   * @memberof AddMember
   */
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
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


  /**
   * renders the addMember components
   *
   * @returns {void}
   * @memberof AddMember
   */
  render() {
    return (

      <div style={style}>
        <CardTitle title="Add" />
        <TextField
          name="groupId" onChange={this.onChange} value={this.state.groupId}
          floatingLabelText="Group ID" /><br />
        <TextField
          name="userId" onChange={this.onChange} value={this.state.userId}
          floatingLabelText="User ID" /><br />
        <RaisedButton
          style={{
            display: 'block',
            width: '20px'
          }}
          onClick={this.onClick}
            label="Add" primary />
      </div>
    );
  }

}

export default AddMember;
