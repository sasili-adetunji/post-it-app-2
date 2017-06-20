import React, { Component } from 'react'
import { signOut, readMessage, showGroups }from '../../actions/PostItAuth.js';
import MessageBox from '../MessageBox';
import GroupList from '../GroupList';
import MessageList from '../MessageList';
import GroupAdd from '../GroupAdd';
import FilteredList from '../FilteredList';



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  messages = (e) => {
    e.preventDefault()
    readMessage()
  }
  groups = (e) => {
    e.preventDefault()
    showGroups()
  }
  render () {
    return (
  
  <div className="row">
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
     <ul className="nav navbar-nav">
      <li><a href="#" onClick={this.messages}>Read messages </a></li>
      <li><a href="#" onClick={this.groups}>Show Groups </a></li>
    </ul>
    </div>
  </div>
</nav>
   <div className= "row"> </div>
    <div className="col-sm-3 col-sm-offset-1" >
      <h4> Search Groups </h4> 
      
      </div>
    <div className="col-sm-4"> 
      <h4> Send Message to group.</h4> 
      <MessageBox />
      </div>
    <div className="col-sm-4"> 
      <h4> Create Groups</h4> 
      <GroupAdd />
    </div>
    
  </div>
 )
 }
}