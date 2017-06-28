import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

var {ListItem} = mui;

class Group extends React.Component {
  constructor(props){
    super(props);
  }

  onClick(){
    Actions.groupOpened(this.props.group);
  }

  render(){
    let style = {};

    if(this.props.group.selected){
      style.backgroundColor = '#f0f0f0';
    }

    return (
      <ListItem
        href={'/#/dashboard/' + this.props.group.key}
        style={style}
        key={this.props.group.key}
      >{this.props.group.name}</ListItem>
    );
  }
}

export default Group;