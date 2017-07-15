import React from 'react';
import mui from 'material-ui';
import  Paper  from 'material-ui/Paper';
import * as PropTypes from "react/lib/ReactPropTypes";
import PostItStore from '../../stores/PostItStore'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DashContainer from '../DashContainer.js';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Redirect } from 'react-router-dom'


const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    body: {
        backgroundColor: '#edecec',
        display: 'flex',
        flex: 1,
        overflow: 'hidden',
    },
    content: {
        flex: 1,
        padding: '2em',
    },
};

class Dashboard extends React.Component {
	 
    
    render() {
      return (

          <div className='row'>
      <MuiThemeProvider>
        <DashContainer />
      </MuiThemeProvider>
      </div>
    );
  

}

 
  
}
export default Dashboard;
