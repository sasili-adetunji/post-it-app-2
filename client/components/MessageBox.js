import React from 'react';
import trim from 'trim';
import MessageStore from '../stores/MessageStore.js';
import { message } from '../actions/PostItAuth.js';


function setErrorMsg(error) {
  return {
    messageError: error
  }
}

class MessageBox extends React.Component {
	constructor(props){
	super(props);
	this.state = {
		messageBody: '',
    groupId: ''
	};
	
}

onChangeMessage(e){
	this.setState({
		messageBody: e.target.value,
	});
}

onChangeGroup(e){
  this.setState({
    groupId: e.target.value,
  });
}

handleSubmit(e){
		e.preventDefault();
    this.setState({
			messageBody: '',
      groupId: ''
		})
    message(this.messageBody.value, this.groupId.value)
    console.log('A new Message: ', this.state.messageBody, 'has been sent to the group', this.state.groupId);
	}


   render() {
   return (
   	<div style={{
   		maxWidth: 1200,
   		margin: '30px auto',
   		padding: 30
   	}} >
        <div style={{
          width: '100%',
          borderColor: '#D0D0D0',
          resize: 'none',
          borderRadius:3,
          minHeight: 50,
          color: '#555',
          fontSize: 14,
          outline: 'auto 0px'
        }}>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label for="message">Message</label>
          <textarea className="form-control" rows="5" id="message" 
          type="text" placeholder="Write a message..." required 
          ref={(messageBody) => this.messageBody = messageBody} onChange= {this.onChangeMessage.bind(this)}>
          </textarea> 
        </div>

        <div className="form-group">
          <label for="groupId">Group ID</label>
          <input type="text" className="form-control" id="groupId" 
          placeholder="Enter the group Id... required "  
          ref={(groupId) => this.groupId = groupId} 
          onChange= {this.onChangeGroup.bind(this)} />
        </div>
      <button type="button" className="btn btn-primary btn-sm">Send </button>      
      </form>
     </div>
     </div>
   
    );
}

}

export default MessageBox;