import React from 'react';
import { Modal } from 'react-bootstrap';
import PostItStore from '../../stores/PostItStore';
import Group from './Group';
import CreateGroup from './CreateGroup';

 /**
  * A collection of group that displays the auser's groups
  * on the message board
  *
  * @class GroupList
  *
  * @extends {React.Component}
  */
class GroupList extends React.Component {
  /**
  * @description Creates an instance of GroupList.
  * bind methods and set initial state.
  *
  * @memberof GroupList
  *
  * @param {object} props
  */
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

 /**
   * Handles close Modal event
   *
   * @param {SyntheticEvent} event
   *
   * @returns {void} null
   */
  closeModal() {
    this.setState({ isOpen: false });
  }

   /**
   * Handles open Modal event
   *
   * @param {SyntheticEvent} event
   *
   * @returns {void} null
   */
  openModal() {
    this.setState({ isOpen: true });
  }

/**
 * @method render
 *
 * Render grouplist component
 *
 * @returns {ReactElement} Grouplist markup
 *
 * @memberof GroupList
 */
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
            onClick={this.openModal}
            type="button"
            id="createNewGroup"
            className="btn btn-primary btn-block createGroup"
          >  Create a Group
          </button>
          <Modal show={this.state.isOpen} onHide={this.closeModal}>
            <Modal.Body>
              <CreateGroup />
            </Modal.Body>
            <Modal.Footer>
              <a onClick={this.closeModal}> Close</a>
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
