import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NotFound extends Component {
  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>404 PAGE NOT FOUND</h1>
        <NavLink to='/home'>Back to Home</NavLink>
      </div>
    )
  }
}

export default NotFound
