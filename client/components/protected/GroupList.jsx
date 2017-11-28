import React from 'react';
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
    this.openAddMemberModal = this.openAddMemberModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }


 /**
   * @description describes a function that dynamically
   * controls the behaviour of a modal
   *
   * @param { string } event
   *
   * @return { void }
   *
   * @memberof GroupList
   */
  openAddMemberModal = (event) => {
    event.preventDefault();
    const $myModal = $('#myModal');
    $myModal.modal();
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
  onClick(event) {
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
        error: ''
      });
    }
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
    if (this.props.groups.length < 1) {
      header = (<div> <h4 className="card-header"> No Group yet </h4> </div>);
    } else {
      header = (<div> <h4 className="card-header"> My Groups </h4> </div>);
    }
    const groupNodes = this.props.groups.map((group, i) => (
      <Group group={group} key={i} />
    ));
    return (
      <div>
        <div className="createGroupBtn">
          <button
            onClick={this.openAddMemberModal}
            type="button"
            id="createNewGroup"
            className="btn btn-primary btn-block createGroup"
          >Create a Group
          </button>
          <div
            className="modal fade modal2"
            id="myModal"
            role="dialog"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                  >
                    &times;
                      </button>
                  <h4 className="modal-title">
                    Create Group
                      </h4>
                  <div className="error"> {this.state.error} </div>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Create Group"
                    name="groupName"
                    onChange={this.onChange}
                    value={this.state.groupName}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                      </button>
                  <button
                    onClick={this.onClick}
                    type="submit"
                    id="submit"
                    className="btn btn-success"
                  > Submit </button>
                </div>
              </div>
            </div>
          </div>
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
