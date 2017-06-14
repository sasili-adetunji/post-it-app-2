import React from 'react'
import trim from 'trim';


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
        <input type="text" placeholder="Enter a group Name..." required 
        onChange= {this.onChange.bind(this)} value={this.state.groupName} /> 
       <div> <button type="submit" onClick={this.onClick.bind(this)}>Create Group</button>
       </div>
      </div>

 )
 }
}
export default GroupAdd;