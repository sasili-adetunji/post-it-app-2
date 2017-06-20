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
   this.fb = Firebase.database()
   this.fb.ref('groups').on('child_added', (msg) => {
          
      let res = msg.key,
         re = msg.val();

         this.state.groups[res] = re

      this.setState({
         groups: this.state.groups
      });


      console.log(' GroupID: '+ res+ ', Group Name: '+ re.groupName+ ', Group Admin: '+ re.groupadmin);
   })
}

  render() {
    return (
      <ul className="list-group">
      {
        this.props.groups.map(function(item) {
          return   
          <li className="list-group-item" key={item}> {item} 
          </li>
        })
       }
      </ul>
    )  
  }
}

