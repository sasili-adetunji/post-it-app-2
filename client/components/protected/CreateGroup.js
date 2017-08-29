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
      groupname: ''
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
      groupname: e.target.value
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
      groupname: this.state.groupname
    };
    PostItActions.createGroup(group);
    this.setState({
      groupname: ''
    });
  }
  render() {
    return (
      <div className="panel-body">
        <form className="navbar-form" role="search">
          <div className="form-group">
            <input
            type="text" className="form-control" placeholder="Create Group"
            name="groupname" onChange={this.onChange} value={this.state.groupname} />
          </div>
          <button onClick={this.onClick} type="submit" className="btn btn-default ">
            <span className="glyphicon glyphicon-plus" /></button>
        </form>
      </div>
    );
  }
}
export default CreateGroup;
