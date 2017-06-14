import React from 'react';
import Router from 'react-router';
import App from '../components';
import BrowserRouter from 'react-router-dom';
import Home from '../components/Home';
import Dashboard from '../components/protected/Dashbord';
import Login from '../components/Login';
import Register from '../components/Register';
import Group from '../components/Group';




let Route= Router.Route;
let DefaultRoute= Router.DefaultRoute;


let routes = (

<Route path='/' handler ={App}> 
 	<DefaultRoute handler={Home} />
 	<Route path='/user/signup' handler={Register} />
 	<Route path='/user/signin' handler={Login} />
 	<Route path='/dashboard' handler={Dashboard} />
 	<Route path='/group' handler={Group} />
 	<Route path='/group:groupId' handler= {Group} />
</Route>

);

Router.run(routes, Router.HashLocation, (Root) =>{
	React.render(<Root />, document.getElementById('root'));
});
