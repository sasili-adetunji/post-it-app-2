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
  margin: '30px 30px',
  padding: 30,
  textAlign: 'center',
  display: 'inline-block',
};

/**
 *
 *
 * @class CreateGroup
 * @extends {React.Component}
 */
class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupname: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }


  /**
   * monitors the state of the components and change the state
   *
   * @param {any} e
   * @memberof CreateGroup
   */

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  /**
   * makes an action call to create group
   *
   * @param {any} e
   * @memberof CreateGroup
   */
  onClick(e) {
    e.preventDefault();
    const group = {
      groupname: this.state.groupname
    };
    PostItActions.createGroup(group);
  }
  /**
   *
   * renders the createGroup components
   * @returns {void}
   * @memberof CreateGroup
   */
  render() {
    return (
      <div>
        <CardTitle title="Create" />
        <TextField
          name="groupname" onChange={this.onChange} value={this.state.groupname}
          floatingLabelText="Group Name" /><br />
        <RaisedButton
          style={{
            width: '200px',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: '50px',
            fontSize: 14
          }} onClick={this.onClick}
              label="Create" primary />
      </div>
    );
  }

}
export default CreateGroup;
