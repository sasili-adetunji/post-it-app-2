import React from 'react';
import trim from 'trim';
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

class CreateGroup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      groupname: ''
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
    let group = {
      groupname: this.state.groupname  
    }
        PostItActions.createGroup(group);
}
  render () {
            return (

    
      <div style={style}> 

       <CardTitle title="Create" />

      <TextField name= 'groupname' onChange={this.onChange} value = {this.state.groupname}
       floatingLabelText="Group Name"  /><br />
      <RaisedButton style={{
                display: 'block',
                width: '20px'
              }} onClick={this.onClick}
              label="Create" primary={true} />
      </div>
    );
}

}
export default CreateGroup;