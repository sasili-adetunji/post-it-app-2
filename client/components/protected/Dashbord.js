import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationMenu extends Component {

  render() {
    return (
      <div className="well well-sm container-fluid ">
        <div className="row">
          <div className="col-md-4 right-align">
            <a href="#"><span className="glyphicon glyphicon-user">&nbsp;</span>Welcome</a>
          </div>
          <div className="row">
            <div className="col-md-6" />
            <div className="col-md-6 right-align">
              <div className="btn-group">
                <Link className="space_link" to="/messageboard"><span /><b>DASHBOARD </b></Link>
                <span className="space_link"><b> | </b></span>
                <Link className="" to="/addGroup"><span /><b> ADD GROUP</b></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationMenu;
