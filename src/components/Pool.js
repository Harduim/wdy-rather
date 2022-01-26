import React, { Component } from 'react'
import Avatar from './Avatar'
import { connect } from 'react-redux'

class Pool extends Component {
    render() {
        return (
            <div className='pool-card'>
                <div className='pool-header'>
                    <div><b>Username Asks:</b></div>
                </div>
                <div className='pool-body'>
                    <div className='pool-avatar' xs={0} sm={3}><Avatar/></div>
                    <div xs={12} sm={9}>
                        <div><b>Would You Rather</b></div>
                        <div>Some quick example text to build on the card title and make up the bulk of
                            the card's content.</div>
                        <div style={{textAlign: 'center'}}><a href='#pool'>View pool</a></div>
                    </div>
                </div>

            </div>
        )
    }
}


export default connect()(Pool);