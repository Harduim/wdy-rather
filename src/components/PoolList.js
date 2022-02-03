import React, { Component } from 'react'
import Pool from './Pool'

class PoolList extends Component {
    render() {
        const { poolIds, pools } = this.props

        return (
            <div className='pool-list'>
                <div>
                    {poolIds.map(p => <Pool p={pools[p]} key={pools[p].id} />)}
                </div>
            </div>
        )
    }
}


export default PoolList