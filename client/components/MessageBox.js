import React from 'react';
import { Card, CardHeader, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
 * Renders the MessageBox components
 *
 * @class MessageBox
 * @extends {React.Component}
 */
class MessageBox extends React.Component {

  /**
   * Creates an instance of MessageBox.
   * @param {any} props
   * @memberof MessageBox
   */
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      groupId: '',
      priorityLevel: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  /**
   * monitors the state of the components state
   *
   * @param {any} e
   * @memberof MessageBox
   */
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  /**
   * makes an action call to post message
   *
   * @param {any} e
   * @memberof MessageBox
   */
  onClick(e) {
    e.preventDefault();
    const message = {
      message: this.state.message,
      groupId: this.state.groupId,
      priorityLevel: this.state.priorityLevel,
    };
    PostItActions.addMessage(message);
  }

  /**
   * renders the messagebox components
   *
   * @returns {void}
   * @memberof MessageBox
   */
  render() {
    return (
         <MuiThemeProvider>
        <Card>
          <CardTitle title="Send Message" />
        <textarea
            name="message"
            value={this.state.message} onChange={this.onChange}
            style={{
              width: '200px',
              borderColor: '#D0D0D0',
              resize: 'none',
              borderRadius: 3,
              minHeight: '50px',
              color: '#555',
              fontSize: 14,
              outline: 'auto 0px'
            }} />
        <div>
          <TextField
          style={{
            width: '200px',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: '50px',
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
          }}
            name="groupId" onChange={this.onChange} value={this.state.groupId}
            floatingLabelText="Group ID" />
          <br />
          <label htmlFor="priorityLevel">Priority Level:</label>
          <select
            style={{
              width: '200px',
              borderColor: '#D0D0D0',
              resize: 'none',
              borderRadius: 3,
              minHeight: '50px',
              color: '#555',
              fontSize: 14,
              outline: 'auto 0px'
            }}
            placeholder="Priority Level" name="priorityLevel" onChange={this.onChange}
            value={this.state.priorityLevel} className="form-control">
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Critical">Critical</option>
          </select>
        </div>
        <RaisedButton
          style={{
            display: 'block',
            width: '20px'
          }}
            onClick={this.onClick}
            label="Send " primary
             />
        </Card>

            </MuiThemeProvider>
    );
  }

}

export default MessageBox;
