import React from 'react';
import Login from './Login'
import Register from './Register'



class LoginRegister extends React.Component {
   render(){

        return (
      <div>
      <Login />
      <Register />

      </div>  
        );
    }
}


module.exports = LoginRegister;

