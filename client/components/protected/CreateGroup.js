import React from 'react';
import PostItActions from '../../actions/PostItActions';


/**
 * Dashboard component.
 * @returns {void} The markup for the Dashboard component
 */
class CreateGroup extends React.Component {
    /**
     * Creates an instance of Dashboard and renders the components
     * @memberOf Dashboard
     * @returns {void} The markup for the Dashboard
    */
  constructor(props) {
    super(props);
    this.state = {
      groupName: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  /**
   * monitors the state of the components and change the state
   *
   * @param {any} e
   * @memberof CreateGroup
   */
  onChange(e) {
    this.setState({
      groupName: e.target.value
    });
  }
  /**
   * makes an action call to create group
   *
   * @param {any} e
   * @memberof CreateGroup
   */
  onClick(e) {
    e.preventDefault();
    const group = {
      groupName: this.state.groupName,
      userName: this.props.userName.displayName
    };
    PostItActions.createGroup(group);
    this.setState({
      groupName: ''
    });
  }
  render() {
    return (
      <div className="panel-body">
        <form className="navbar-form" role="search">
          <div className="form-group">
            <input
            type="text" className="form-control" placeholder="Create Group"
            name="groupName" onChange={this.onChange} value={this.state.groupName} />
          </div>
          <button onClick={this.onClick} type="submit" className="btn btn-default ">
            <span className="glyphicon glyphicon-plus" /></button>
        </form>
      </div>
    );
  }
}
export default CreateGroup;
