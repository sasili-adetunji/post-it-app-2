import React from 'react';
import PostItActions from '../../actions/PostItActions';
import * as API from '../../Api';


/**
 * creates Group components
 *
 * @class Group
 * @extends {React.Component}
 */
class Group extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

   /**
     * @description Makes an apu call to get group messges, users
     * @param {object} event
     * @returns {void}
     * @memberof CreateGroup
  */

  onClick() {
    PostItActions.groupOpened(this.props.group);
    PostItActions.getUserMessages(this.props.group);
    API.getUsersInGroup(this.props.group);
    API.getUserGroups();
  }

  /**
   * @method render
   * Render react component
   *
   * @returns {String} The HTML markup for the Group Components
   * @memberof Group
   */
  render() {
    return (
      <div className="side-menu-container list-group-item">
        <a> <li onClick={this.onClick}>
         <b> { this.props.group.groupName } </b>
        </li> </a>
      </div>
    );
  }
}
export default Group;
