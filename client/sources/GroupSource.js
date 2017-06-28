import Actions from '../actions';
import firebase from 'firebase';
import { ref } from '../../server/config/db'
const fb = firebase.database();



let GroupSource = {
  getGroups: {
    remote(state, selectedGroupKey){
      return new Promise((resolve, reject) => {
        fb.ref('channels').once('value', (dataSnapshot)=> {
          var groups = dataSnapshot.val();
          selectedGroupKey = selectedGroupKey || _.keys(groups)[0];
          var selectedGroup = groups[selectedGroupKey];
          if(selectedGroup){
            selectedGroup.selected = true;
          }
          resolve(groups);
        });
      });
    },
    success: Actions.groupsReceived,
    error: Actions.groupsFailed
  }
}

export default GroupSource;