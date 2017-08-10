import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DashContainer from '../DashContainer';

class Dashboard extends React.Component {
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
