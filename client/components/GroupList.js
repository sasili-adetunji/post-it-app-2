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

import Group from './Group';
import { List } from 'material-ui/List';







class GroupList extends React.Component {
  constructor(props){
    super(props);
   
}


render(){
    if(!this.props.groups){
      return (
        <div>
  <MuiThemeProvider >

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
        </MuiThemeProvider>

        </div>
      );
    }

    
    var groupNodes = this.props.groups.map((group, i)=> {
        return (
          <Group group={group} key={i} />
        );
      })
              console.log('GroupList------', this.props.groups)



    return ( 
      <div> 
      <MuiThemeProvider>

       <List >
       <CardTitle title="Group List" />
          {groupNodes}
        </List>
                </MuiThemeProvider>

        </div>
        )
      }
    }


export default GroupList;