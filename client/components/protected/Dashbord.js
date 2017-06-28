import React from 'react';
import mui from 'material-ui';
import ChatStore from '../../stores/ChatStores'
import MessageBox from '../MessageBox.js';
import GroupList from '../GroupList';
import MessageList from '../MessageList';
import GroupAdd from '../GroupAdd';


var { Menu, MenuItem, Paper, Tab, Tabs } = mui;


class Dashboard extends React.Component {
  render(){
    return (
      <div>
    <Tabs>
          <Tab label="&nbsp;Item 1&nbsp;" />
          <Tab label="&nbsp;Item 2&nbsp;" />
          
    </Tabs>
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
          <GroupList {...this.props} />
          <MessageList />
          <GroupAdd />
        </div>
        <MessageBox />
        
      </div>
    );
  }
 


static willTransitionTo(transition){
    var state = ChatStore.getState();
    if(!state.user){
      transition.redirect('/signin');
    }
  }
}
export default Dashboard;


