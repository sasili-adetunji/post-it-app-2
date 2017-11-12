import React from 'react';
import PostItActions from '../../actions/PostItActions';
import * as API from '../../Api';


/**
 * create creategroup components
 *
 * @class CreateGroup
 * 
 * @extends {React.Component}
 */
class CreateGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      groupName: '',
      error: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  /**
  * @method onChange
  *
  * @description Monitors changes in the components and change the state
  *
  * @memberof CreateGroup
  *
  * @param {object}
  *
  * @returns {void}
  */

  onChange(event) {
    this.setState({
      groupName: event.target.value
    });
  }


/**
 * @description Makes an action call to create a group
 *
 * @param {object} event
 * 
 * @returns {void}
 * 
 * @memberof CreateGroup
*/
  onClick(event) {
    event.preventDefault();
    const group = {
      groupName: this.state.groupName,
    };
    if (!this.state.groupName) {
      this.setState({
        error: 'Group Name is Required'
      })
    } else {
    PostItActions.createGroup(group);
    API.getUserGroups();
    this.setState({
      groupName: '',
      error: ''
    });
    }
  }


  /**
   * @method render
   * 
   * Render react component
   * 
   * @returns {String} The HTML markup for the CreateGroup Components
   * 
   * @memberof CreateGroup
   */
  render() {
    return (
      <div className="panel-body">
        <div className='error'> {this.state.error} </div>
        <form className="navbar-form" role="search">
          <div className="form-group">
            <input
            type="text" className="form-control" placeholder="Create Group"
            name="groupName" onChange={this.onChange} 
            value={this.state.groupName} />
          </div>
          <button onClick={this.onClick} type="submit" 
          className="btn btn-default ">
            <span className="glyphicon glyphicon-plus" /></button>
        </form>
      </div>
    );
  }
}
export default CreateGroup;
