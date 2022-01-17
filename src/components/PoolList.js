import React, { Component } from 'react'
import Pool from './Pool'


class PoolList extends Component {
    state = { pools: [1, 2, 3, 4, 5, 6, 7, 8, 9] }

    render() {
        const { pools } = this.state

        return (
            <div className='pool-list'>
                <div>
                    Search bar
                </div>
                <div>
                    {pools.map(p => <Pool p={p} />)}
                </div>
            </div>
        )
    }
}


export default PoolList