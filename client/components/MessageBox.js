import React from 'react';
import trim from 'trim';
import mui from 'material-ui';
import Actions from '../actions'
var {
    Card,
    CardText,
    TextField,
    RaisedButton
} = mui;


class MessageBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
      groupId: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }


   onClick(e){
      e.preventDefault();

      Actions.sendMessage({
        message: this.state.message,
        groupId: this.state.groupId
      });
    console.log('A new Message: ', this.state.message, 'has been sent to the group', this.state.groupId);
      this.setState({
        message: '',
        groupId: ''
      });
    }

 render(){

        return (
    
      <Card style={{
        maxWidth: 1200,
        margin: '30px auto',
        padding: 30
      }}> 
      <div>
      <h4> Send Message to Group </h4> </div>
        <textarea name= 'message'
          value={this.state.message}
          onChange={this.onChange}
          style={{
            width: '30%',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: 50,
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
          }} />
          <div>
          <TextField name= 'groupId' onChange={this.onChange} value = {this.state.groupId}
          floatingLabelText="Group ID" /><br />
          </div>
          <RaisedButton style={{
                display: 'block',
                width: '20px'
              }} onClick={this.onClick}
              label="Send " primary={true} />
      </Card>
    );
}

}

export default MessageBox;