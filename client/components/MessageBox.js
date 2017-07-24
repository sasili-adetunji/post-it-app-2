import React from 'react';
import trim from 'trim';
import {CardHeader, CardTitle} from 'material-ui/Card';
import  TextField  from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import firebase from 'firebase';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import PostItActions from '../actions/PostItActions';

let emails = [];
let userIds = [];




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
      groupId: '',
      priorityLevel: ''
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
        groupId: this.state.groupId,
        priorityLevel: this.state.priorityLevel,
      }

     PostItActions.addMessage(message)
      //console.log(message)
      // const groupRef = firebase.database().ref(`groups/-Kpniq09QbqloaIMjgcY/messages`)
      //   .push().set({
      //     message: this.state.message         
      //   })
      //   const userRef = firebase.database().ref(`groups/-Kpniq09QbqloaIMjgcY/users/`);
      //       userRef.orderByKey().once('value', (snapshot) => {
      //               snapshot.forEach((childSnapShot) => {
      //               userIds.push(childSnapShot.val().Id);
      //           console.log('user Ids ', userIds)
      //         })
      //       userIds.forEach((uid) => {         
                  
      // const userRef2 = firebase.database().ref(`users/${uid}/groups/-Kpniq09QbqloaIMjgcY/messages`);
      //   userRef2.push().set({
      //     message: this.state.message
      //     }) 
      //   if((this.state.priorityLevel==="Critical") || (this.state.priorityLevel==="Urgent")){
      //   const userEmailRef = firebase.database().ref(`users/${uid}/`)
      //                   .once('value', (snap) => {
      //                       emails.push(snap.val().email);
      //                       console.log('user Emails ', emails)
                            
                        
      //           emails.forEach((email) => {
      //             let mail = email;
      //             console.log('EEEEEmails', mail)
      //           })
      //       })
      //                 }
      //  })       
              
             
      //     })

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
            <label htmlFor="priorityLevel">Priority Level:</label>
          <select  style={{
            width: '200px',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: '50px',
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
            }}
             placeholder= 'Priority Level' name='priorityLevel' onChange={this.onChange} value = {this.state.priorityLevel} className="form-control">
            <option value='Normal'>Normal</option>
            <option value= 'Urgent'>Urgent</option>
            <option value='Critical'>Critical</option>
          </select>
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