import React, { Component } from 'react'
import { Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { unsetAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

class SiteNav extends Component {
  render () {
    const { dispatch } = this.props
    return (
      <div className='main-nav-wrapper'>
        <Nav className='flex-column'>
          <NavLink className='nav-pills nav-link' to='/home'>Home</NavLink>
          <NavLink className='nav-pills nav-link' to='/add'>New Question</NavLink>
          <NavLink className='nav-pills nav-link' to='/leaderboard'>Leaderboard</NavLink>
          <Button className='nav-pills' onPointerDown={e => dispatch(unsetAuthedUser())}>Sign Off</Button>
        </Nav>
      </div>
    )
  }
}

export default connect()(SiteNav)
