import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DashContainer from '../DashContainer';

/**
 * Dashboard component.
 * @returns {void} The markup for the Dashboard component
 */
class Dashboard extends React.Component {
/**
 * Creates an instance of Dashboard and renders the components
 * @memberOf Dashboard
 * @returns {void} The markup for the Dashboard
*/
  render() {
    return (
      <div className="row">
        <MuiThemeProvider>
          <DashContainer />
        </MuiThemeProvider>
      </div>
    );
  }


}
export default Dashboard;
