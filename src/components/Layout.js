import React, { Component } from 'react'
import Sidebar from './Sidebar'



class Layout extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xs-0 col-lg-3'>
                        <Sidebar />
                    </div>
                    <div className='col-xs-12 col-lg-9'>
                        <div className='main-content-wrapper'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-1'></div>
                                    <div className='col-8'>{this.props.children}</div>
                                    <div className='col-1'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout