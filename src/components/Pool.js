import React, { Component } from 'react'
import Avatar from './Avatar'

class Pool extends Component {
    render() {
        const { p } = this.props
        return (
            <div className='pool-card' key={p.id}>
                <div className='pool-header'>
                    <div><b>{p.author} Asks:</b></div>
                </div>
                <div className='pool-body row'>
                    <div className='col-3 pool-avatar'><Avatar/></div>
                    <div className='col-9'>
                        <div><b>Would You Rather</b></div>
                        <div>
                            <div>{p.optionOne.text}</div>
                            <div>or..</div>
                            <div>{p.optionTwo.text}</div>
                        </div>
                        <br/>
                        <div style={{textAlign: 'center'}}><a href='#pool'>View pool</a></div>
                    </div>
                </div>

            </div>
        )
    }
}


export default Pool;