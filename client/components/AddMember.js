import React from 'react';
import {CardHeader, CardTitle} from 'material-ui/Card';
import  TextField  from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import PostItActions from '../actions/PostItActions';


const style = {
  height: 100,
  width: 100,
  margin: '30px auto',
  padding: 30,
  textAlign: 'center',
  display: 'inline-block',
};


class AddMember extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      groupname: '',
      userId: ''
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
let user ={
     userId: this.state.userId,
     groupId: this.state.groupId
    }
        PostItActions.addUserToGroup(user);
}

   
render () {
            return (

      <div style={style}> 
       <CardTitle title="Add" />
        <TextField name= 'groupId' onChange={this.onChange} value = {this.state.groupId}
              floatingLabelText="Group ID"/><br />
        <TextField name= 'userId' onChange={this.onChange} value = {this.state.userId}
          floatingLabelText="User ID" /><br />
          <RaisedButton style={{
                display: 'block',
                width: '20px'
              }} onClick={this.onClick}
              label="Add" primary={true} />
      </div>
    );
}

}

export default AddMember;