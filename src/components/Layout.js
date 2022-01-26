import React, { Component } from 'react'
import Sidebar from './Sidebar'



class Layout extends Component {
    render() {
        return (
            <div>
                <div>
                    <div xs={3} >
                        <Sidebar />
                    </div>
                    <div xs={9} >
                        <div className='main-content-wrapper'>
                            <div>
                                <div>
                                    <div md={0} lg={1}></div>
                                    <div md={12} lg={8}>{this.props.children}</div>
                                </div>
                                <div>
                                    <div md={0} lg={1}></div>
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