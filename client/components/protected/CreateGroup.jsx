import React from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import PostItActions from '../../actions/PostItActions';
import API from '../../Api';


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
  onClick(event) {
    event.preventDefault();
    const group = {
      groupName: this.state.groupName,
      userName: this.props.userName.displayName
    };
    // console.log(group);
    PostItActions.createGroup(group);
    API.getUserGroups();
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
         <Alert stack={{ limit: 3 }} timeout={3000} />
      </div>
    );
  }
}
export default CreateGroup;
