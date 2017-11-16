import React from 'react';
import { Modal } from 'react-bootstrap';
import PostItStore from '../../stores/PostItStore';
import Group from './Group';
import CreateGroup from './CreateGroup';

/**
 * @description Displays a list of groups a user belongs to
 *
 * @function GroupList
 *
 * @returns {JSX} list of groups a user belongs
 */
class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateGroup: false,
    };
    this.closeGroup = this.closeGroup.bind(this);
    this.openGroup = this.openGroup.bind(this);
  }

  closeGroup() {
    this.setState({ showCreateGroup: false });
  }
  openGroup() {
    this.setState({ showCreateGroup: true });
  }
  render() {
    let header = null;
    if (PostItStore.getGroupsUser().length < 1) {
      header = (<div> <h4 className="card-header"> No Group yet </h4> </div>);
    } else {
      header = (<div> <h4 className="card-header"> My Groups </h4> </div>);
    }
    const groupNodes = PostItStore.getGroupsUser().map((group, i) => (
      <Group group={group} key={i} />
      ));
    return (
      <div>
        <div className="createGroupBtn">
          <button
            onClick={this.openGroup}
            type="button"
            className="btn btn-primary btn-block createGroup"
          >  Create a New Group
          </button>
          <Modal show={this.state.showCreateGroup} onHide={this.closeGroup}>
            <Modal.Body>
              <CreateGroup />
            </Modal.Body>
            <Modal.Footer>
              <a onClick={this.closeGroup}> Close</a>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="allGroups">
          <h4> {header} </h4>
          <div className="groupList">
            {groupNodes}
          </div>
        </div>
      </div>
    );
  }
}
export default GroupList;
