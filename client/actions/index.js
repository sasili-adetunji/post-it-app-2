import alt from '../alt';
import * as firebase from 'firebase';
import { ref, firebaseAuth } from '../../server/config/db';
import axios from 'axios';



class Actions {
  constructor(){
    this.generateActions(
      'groupsReceived',
      'groupsFailed',
      'memberAdded',
      'messagesReceived',
      'groupOpened',
      'messagesLoading',
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageReceived'
    );
  }

  signup(details){
  return axios.post('/user/signup', details)
    .then((error,user )=> {
      if(error){
          return;
        }

       dispatch(user);
 })
        router.transitionTo('/dashboard');
    }
    
     signin(details){
  return axios.post('/user/signin', details)
    .then((error,user )=> {
      if(error){
          return;
        }

       dispatch(user);
 })
        router.transitionTo('/dashboard');
    }
}

export default alt.createActions(Actions);
