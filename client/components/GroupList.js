import React from 'react';
import Group from './Group';
import _ from 'lodash';
import Firebase from 'firebase'
import { firebaseRef } from '../../server/config/db'

export default class GroupList extends React.Component {
   constructor(props){
   super(props)
   this.state = {
    groups: {}
   }
   const fb = Firebase.database()
   this.fb = Firebase.database();
   let uid, res, groupKey,
   grou;
  
   this.fb.ref('users').child('jRN2zNHHDvTzs7muOnb5nnjbmwX2')
   .child('groups').on('child_added', (msg) => {
          
      res = msg.key
    
    .then(fb.ref('groups').on('child_added', (snap) => {
       groupKey = snap.key;
           if (groupKey == res)
          return 
          grou = snap.val().groupName;
 
      //    this.state.groups[res] = re
      // this.setState({
      //    groups: this.state.groups
      // });
      console.log(res)
      // console.log(' GroupID: '+ res+ ', Group Name: '+ re.groupName+ ', Group Admin: '+ re.groupadmin);
      // console.log(resi, resil, resili);
 }) 
 )
 })  
}

  render() {
    return (
      <div> </div>
    )  
  }
}

