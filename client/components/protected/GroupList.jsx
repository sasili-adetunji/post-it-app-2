import React from 'react';
import { Modal } from 'react-bootstrap';
import AppStore from '../../stores/AppStore';
import Group from './Group';
import AppActions from '../../actions/AppActions';
import * as Api from '../../api/AppApi';


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
      groupName: '',
      error: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }


/**
* @method onChange
*
* @description Monitors changes in the components and change the state
*
* @memberof CreateGroup
*
* @param {SyntheticEvent} event
*
* @returns {void}
*/
  onChange(event) {
    // event.preventDefault();
    this.setState({
      groupName: event.target.value
    });
  }


/**
 * @description creates a group if groupname is not empty
 *
 * @param {object} event
 *
 * @returns {void}
 *
 * @memberof CreateGroup
*/
  handleSubmit(event) {
    event.preventDefault();
    const group = {
      groupName: this.state.groupName,
    };
    if ((!this.state.groupName) || (!this.state.groupName.trim())) {
      this.setState({
        error: 'Please enter a valid group name'
      });
    } else {
      AppActions.createGroup(group);
      Api.getUserGroups();
      this.setState({
        groupName: '',
        error: '',
        isOpen: false
      });
    }
  }


/**
* Handles open Modal event
*
* @param {SyntheticEvent} event
*
* @returns {void} null
*/
  openModal(event) {
    event.preventDefault();
    this.setState({ isOpen: true });
  }


/**
* Handles close Modal event
*
* @param {SyntheticEvent} event
*
* @returns {void} null
*/
  closeModal(event) {
    event.preventDefault();
    this.setState({ isOpen: false });
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
    if (AppStore.getGroupsUser().length < 1) {
      header = (<div> <h4 className="card-header"> No Group yet </h4> </div>);
    } else {
      header = (<div> <h4 className="card-header"> My Groups </h4> </div>);
    }
    const groupNodes = AppStore.getGroupsUser().map((group, i) => (
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
          >Create a Group
          </button>
          <Modal show={this.state.isOpen} onHide={this.closeModal}>
            <Modal.Body>
              <div className="panel-body">
                <div className="error"> {this.state.error} </div>
                <form
                  onSubmit={this.handleSubmit}
                  className="navbar-form"
                  role="search"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Create Group"
                      name="groupName"
                      onChange={this.onChange}
                      value={this.state.groupName}
                    />
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    className="btn btn-primary addMember"
                  > Submit </button>
                </form>
              </div>
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
