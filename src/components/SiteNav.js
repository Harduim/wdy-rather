import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';



class SiteNav extends Component {
    render() {
        return (
            <div className='main-nav-wrapper'>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">New question</Nav.Link>
                    <Nav.Link eventKey="link-2">Leaderboard</Nav.Link>
                    <Nav.Link eventKey="signout">Sign Out</Nav.Link>
                </Nav>
            </div>
        )
    }
}

export default SiteNav