import React from 'react';
import trim from 'trim';



class MessageBox extends React.Component {
	constructor(props){
	super(props);
	this.state = {
		message: '',
    groupId: ''
	};
	
}

onChangeMessage(e){
	this.setState({
		message: e.target.value,
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
			message: '',
      groupId: ''
		});
		console.log('A new Message: ', this.state.message, 'has been sent to the group', this.state.groupId);
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
        <div> 
          <input type="text" placeholder="Write a message..." required 
          ref={(message) => this.message = message} onChange= {this.onChangeMessage.bind(this)} /> 
        </div>
       <div> 
          <input type="text" placeholder="Enter the group Id... required "  
          ref={(groupId) => this.groupId = groupId} 
          onChange= {this.onChangeGroup.bind(this)} /> 
       </div>
       <div> 
          <button type="submit">Send</button> 
        </div>
      </form>
     </div>
     </div>
   
    );
}

}

export default MessageBox;