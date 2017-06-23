import React from 'react';

class Group extends React.Component {
	constructor(props){
	super(props);
	
}

   render() {
   return (
      <div> {this.props.group} </div>  
);
}

}

export default Group;