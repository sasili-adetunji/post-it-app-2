import React from 'react';
import App from '../components';
import Home from '../components/Home';
import Dashboard from '../components/protected/Dashbord';
import Login from '../components/Login';
import Register from '../components/Register';
import Group from '../components/Group';


import Router from 'react-router';
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Login} />
    <Route path="dashboard" handler={Dashboard} />
    <Route path="dashboard/:group" handler={Dashboard} />
    <Route path="group/:groupId" handler={Group} />
    <Route path="signin" handler={Login} />
    <Route path="signup" handler={Register} />


  </Route>
);

Router.run(routes, Router.HashLocation, (Root)=> {
  React.render(<Root />, document.getElementById('root'));
});