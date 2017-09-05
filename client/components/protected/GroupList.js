import React from 'react';
import CreateGroup from './CreateGroup';
import PostItStore from '../../stores/PostItStore';
import Group from './Group';

/**
 * Dashboard component.
 * @returns {void} The markup for the Dashboard component
 */
class GroupList extends React.Component {
    /**
     * Creates an instance of Dashboard and renders the components
     * @memberOf Dashboard
     * @returns {void} The markup for the Dashboard
    */
  render() {
    const groupNodes = this.props.groups.map((group, i) => {
      return (
        <Group group={group} key={i} />
      );
    });
    return (
      <div className="side-menu">
        <nav className="navbar navbar-default" role="navigation" >
          <div className="navbar-header">
            <div className="brand-wrapper">
              <CreateGroup userName={this.props.loggedInUser} />
            </div>
          </div>
          {groupNodes}
        </nav>
      </div>
    );
  }
}
export default GroupList;
