import React from 'react';
import trim from 'trim';
import {CardHeader, CardTitle, Card} from 'material-ui/Card';
import  TextField  from 'material-ui/TextField';
import  { CircularProgress }  from 'material-ui/CircularProgress';
import _ from 'lodash'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import PostItActions from '../actions/PostItActions';
import PostItStore from '../stores/PostItStore';
import AddMember from './AddMember';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import Group from './Group';
import { List } from 'material-ui/List';



class GroupList extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      showAdd: false
    }

this.handleCellClick = this.handleCellClick.bind(this);
}

handleCellClick (row,column,event){
this.setState({
  showAdd: true
  })
}


render(){
    if(!this.props.groups){
      return (
        <div>

        <Card style={{
          flexGrow: 1
        }}>
          <CircularProgress
            mode="indeterminate"
            style={{
              paddingTop: '20px',
              paddingBottom: '20px',
              margin: '0 auto',
              display: 'block',
              width: '60px'
            }}
          />
        </Card>
        </div>
      );
    }

    
    var groupNodes = this.props.groups.map((group, i)=> {
        return (
          <Group group={group} key={i} onCellClick= {this.handleCellClick}/>
        );
      })
              console.log('GroupList------', this.props.groups)



    return ( 
      <div> 

       <List >
       <CardTitle title="Group List" />
          {groupNodes}
        </List>
        {this.state.showAdd ? 
        <AddMember /> : null
      }
        </div>
        )
      }
    }


export default GroupList;