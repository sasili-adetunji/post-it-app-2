import React from 'react';
import trim from 'trim';
import mui from 'material-ui';
import Actions from '../actions'
var {
    Card,
    CardText,
    TextField,
    RaisedButton
} = mui;

class GroupAdd extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      groupName: ''
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

      Actions.groupAdd({
        groupName: this.state.groupName
      });
    console.log('A new Group: ', this.state.groupName, 'has been created');
      this.setState({
        groupName: '',
      });
    }

  render () {
     return (
    
      <Card style={{
          flexGrow: 1,
          marginLeft: 15,
          paddingTop: 20,
          paddingBottom: 20,
          display: 'block',
          width: '20%'
        }}> 
      <div>
      <h4> Create Group </h4> </div>
      <TextField name= 'groupName' onChange={this.onChange} value = {this.state.groupName}
       floatingLabelText="Group Name"  /><br />
          <RaisedButton style={{
                display: 'block',
                width: '20px'
              }} onClick={this.onClick}
              label="Create Group " primary={true} />
      </Card>
    );
}

}
export default GroupAdd;