import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { unsetAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'


class SiteNav extends Component {

    
    render() {
        const { dispatch } = this.props
        return (
            <div className='main-nav-wrapper'>
                <div className="flex-column">
                    <NavLink className={'nav-pills nav-link'} to="/home" >Home</NavLink>
                    <NavLink className={'nav-pills nav-link'} to="/add" >New Question</NavLink>
                    <NavLink className={'nav-pills nav-link'} to="/leaderboard" >Leaderboard</NavLink>
                    <button className={'nav-pills nav-link'} onPointerDown={e=>dispatch(unsetAuthedUser())}>Sign Off</button>
                </div>
            </div>
        )
    }
}

export default connect()(SiteNav)