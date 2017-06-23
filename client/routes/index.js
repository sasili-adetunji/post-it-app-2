import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components';
import Home from '../components/Home';
import Dashboard from '../components/protected/Dashbord';
import Login from '../components/Login';
import Register from '../components/Register';
import Group from '../components/Group';





export default(
   <div>
    <Route path="/" component={App} />
    <Route path="/signin" component={Login} />
    <Route path="/signup" component={Register} />
    <Route path="/dashboard" component={Dashboard} />

  </div>
);