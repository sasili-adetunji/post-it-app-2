import React from 'react';
import Group from './Group.js';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStores';
import GroupSource from '../sources/GroupSource';

var {Card, List, CircularProgress, Subheader} = mui;

@connectToStores
class GroupList extends React.Component {
  constructor(props){
    super(props);
    this.state = {groups: null};
  }

  componentDidMount(){
    this.state.selectedGroup = this.props.params.group;
    ChatStore.getGroups(this.state.selectedGroup);
  }

  componentWillReceiveProps(nextProps){
    if(this.state.selectedGroup != nextProps.params.group){
      this.state.selectedGroup = nextProps.params.group;
      ChatStore.getGroups(this.state.selectedGroup);
    }
  }

  static getStores(){
    return [ChatStore];
  }

  static getPropsFromStores(){
    return ChatStore.getState();
  }

  render(){
    if(!this.props.groups){
      return (
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
              width: '30%'
            }}/>
        </Card>
      );
    }


    var groupNodes = _(this.props.groups)
      .keys()
      .map((k, i)=> {
        let group = this.props.groups[k];
        return (
          <Group group={group} key={i}/>
        );
      })
      .value();

    return (
      <Card style={{
        flexGrow: 1
      }}> 
        <List>
        <h4> My Groups </h4>
          {groupNodes}

        </List>
      </Card>
    );
  }
}

export default GroupList;