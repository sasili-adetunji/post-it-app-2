import React from 'react'
import trim from 'trim';
import { addGroup } from '../actions/PostItAuth.js';


class GroupAdd extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    groupName: ''
  }
  
}
onChange(e){
  this.setState({
    groupName: e.target.value
  });
}

onClick(e){
    e.preventDefault();
    this.setState({
      groupName: ''
    });
    addGroup(this.state.groupName)

    console.log('A new group has been created:', this.state.groupName);

}

  render () {
    return (
    	<div style={{
          width: '100%',
          borderColor: '#D0D0D0',
          resize: 'none',
          borderRadius:3,
          minHeight: 50,
          color: '#555',
          fontSize: 14,
          outline: 'auto 0px'}}>
      <div className="form-group">
          <label for="groupId">Group ID</label>
          <div>
          <input type="text" placeholder="Enter a group Name..." required 
          onChange= {this.onChange.bind(this)} value={this.state.groupName} />
                 </div>
 
          <div>
       <button type="button" className="btn btn-primary btn-sm" onClick={this.onClick.bind(this)}>Create Group </button>
       </div>
       </div>
      </div>
 )
 }
}
export default GroupAdd;