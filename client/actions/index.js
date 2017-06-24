import alt from '../alt';
import * as firebase from 'firebase';
import { ref, firebaseAuth } from '../../server/config/db';



class Actions {
  constructor(){
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelOpened',
      'messagesLoading',
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageReceived'
    );
  }

  login(router){
    return (dispatch) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return firebaseAuth().signInWithPopup(provider).then((error,user )=> {
      if(error){
          return;
        }

       dispatch(user);
 })
        router.transitionTo('/chat');
    }
  }
}

export default alt.createActions(Actions);
