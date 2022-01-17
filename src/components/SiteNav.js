import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"


class SiteNav extends Component {
    render() {
        return (
            <div className='main-nav-wrapper'>
                <Nav className="flex-column">
                <NavLink to="/home" activeClassName="active">Home</NavLink>
                <NavLink to="/add" activeClassName="active">New Question</NavLink>
                <NavLink to="/leaderboard" activeClassName="active">Leaderboard</NavLink>
                <NavLink to="/signoff" activeClassName="active">Sign Off</NavLink>
                </Nav>
            </div>
        )
    }
}

export default SiteNav