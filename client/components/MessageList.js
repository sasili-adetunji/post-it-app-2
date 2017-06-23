import React from 'react';
import Message from './Message';
import _ from 'lodash';
import Firebase from 'firebase'
import { firebaseRef } from '../../server/config/db'

class MessageList extends React.Component {
   constructor(){
   super()
   this.state = {
    messages: {}
   }
   const fb = Firebase.database()
   this.fb = Firebase.database()
   firebaseAuth().onAuthStateChanged((user) => {
      uid = user.uid;
   })
   this.fb.ref('users').child(uid)
   .child('groups').child(groupId)
   .on('child_added', (msg) => {
   
       if (this.state.groups[msg.key]){
         return;
      }
      let msgVal = msg.val();
      msgVal.key = msg.key;
      this.state.groups[msgVal.key] = msgVal;
      this.setState({groups: this.state.groups});
        
      let res = msg.val()
         console.log(res);
      });
};
   render() {
   var groupNodes = _.values(this.state.groups).map((group) => {
   return (
      <div>
   <Group group= {group} />
   <GroupAdd />
   </div>
   );
   });

   return (
   <div> {groupNodes} 

   </div>
   );
}
}

export default MessageList;