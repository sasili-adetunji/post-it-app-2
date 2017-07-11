import React, { Component } from 'react'

export default class Home extends Component {
  render () {
    return (
      <div>
        <h2> Welcome PostIt chat Application. </h2>
        <p> This application allows you to create groups and send messages to all members of the group. </p>
        <p>It will also send a notification to all users and you will be notified if you message has been read</p>
      </div>
    )
  }
}