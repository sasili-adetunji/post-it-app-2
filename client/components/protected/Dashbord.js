import React, { Component } from 'react'

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        <h1> This is the application Dashboard. It is a protected route. You can only see this if you're authorized.
 </h1>     </div>
    )
  }
}