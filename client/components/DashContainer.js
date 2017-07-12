import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import MessageBox from './MessageBox';
import CreateGroup from './CreateGroup';
import AddMember from './AddMember';
import GroupList from './GroupList';
import UserList from './UserList';
import PostItStore from '../stores/PostItStore'
import API from '../Api'


function getAppState() {
    return {
      errors: PostItStore.getErrors(),
      success: PostItStore.getSuccess(),
      loggedInUser: PostItStore.getLoggedInUser(),
      registeredUser: PostItStore.getRegisteredUser(),
      groups: PostItStore.getUserGroups(),
      messages: PostItStore.getUserMessages(),
      selectedGroup: PostItStore.getOpenedGroup()
    };
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    body: {
        backgroundColor: '#edecec',
        display: 'flex',
        flex: 1,
        overflow: 'hidden',
    },
    content: {
        flex: 1,
        padding: '2em',
    },
};

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 600,
    height: 500,
    overflowY: 'auto',
  },
};

class DashContainer extends React.Component {
	constructor(props) {
    super(props);
  this.state ={
      errors: PostItStore.getErrors(),
      success: PostItStore.getSuccess(),
      loggedInUser: PostItStore.getLoggedInUser(),
      registeredUser: PostItStore.getRegisteredUser(),
      groups: PostItStore.getUserGroups(),
      messages: PostItStore.getUserMessages(),
      selectedGroup: PostItStore.getOpenedGroup()

  }

  }
  _onChange() {
     this.setState(getAppState());
   };
	
componentDidMount(){
    //console.log(this.state.loggedInUser);
    API.getUserGroups();
    PostItStore.addChangeListener(this._onChange.bind(this));
  }

componentUnmount() {
    PostItStore.removeChangeListener(this._onChange.bind(this));
  }
  


  
  render () {

            return (
        
         <div style={style.root}>
    		<GridList
      		cellHeight={180}
      		style={style.gridList}
    >
    <MessageBox />
    <CreateGroup />
    <AddMember />
   <GroupList groups = {this.state.groups} />
    
    </GridList>
      </div>
    );
}
  

}
export default DashContainer;