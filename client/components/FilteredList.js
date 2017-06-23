
import React, { Component } from 'react'
import GroupList from './GroupList';



export default class FilteredList extends React.Component {
  constructor(props){
  super(props);

  this.state = {
    groups: this.props.groups
  }
}
     
filterList = (e) => {
   let updatedList = this.state.groups.filter(function(item){
    return item.search(e.target.value) !== -1;
    });
    this.setState({items: updatedList});
  }


render() {
    return (
      <div className="filter-list">
      <input type="text" placeholder=" Search" onChange={this.filterList}/>
      <div>
      <GroupList groups={this.state.groups} />
        </div>
      </div>
    );
  }
}