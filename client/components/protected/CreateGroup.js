import React from 'react';
import PostItActions from '../../actions/PostItActions';


/**
 * create creategroup components
 *
 * @class CreateGroup
 * @extends {React.Component}
 */
class CreateGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      groupName: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      groupName: e.target.value
    });
  }
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
