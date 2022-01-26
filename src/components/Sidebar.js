import React, { Component } from 'react'
import Avatar from './Avatar'
import SiteNav from './SiteNav';


class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='sidebar-padding'>
                    <div><br/></div>
                </div>
                <div className='sidebar-main'>
                    <div xs={12}><Avatar /></div>
                    <div xs={12}><SiteNav /></div>
                    <div xs={12}><br/><br/><br/></div>
                </div>

            </div>
        )
    }
}

export default Sidebar