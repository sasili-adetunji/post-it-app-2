import React from 'react';
import trim from 'trim';
import {CardHeader, CardTitle} from 'material-ui/Card';
import  TextField  from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import PostItActions from '../actions/PostItActions';


const style = {
  height: 100,
  width: 100,
  margin: '30px 30px',
  padding: 30,
  textAlign: 'center',
  display: 'inline-block',
};

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
      let message = {
        message: this.state.message,
        groupId: this.state.groupId
      }
    PostItActions.addMessage(message);
    }

 render(){

        return (

    
      <div style={style}> 

       <CardTitle title="Message" />
      
            
        <textarea name= 'message'
          value={this.state.message}
          onChange={this.onChange}
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
          <TextField style={{
            width: '200px',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: '50px',
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
          }}
           name= 'groupId' onChange={this.onChange} value = {this.state.groupId}
          floatingLabelText="Group ID" /><br />
          </div>
          <RaisedButton style={{
                display: 'block',
                width: '20px'
              }} onClick={this.onClick}
              label="Send " primary={true}
             />
             
      </div>
    );
}

}

export default MessageBox;