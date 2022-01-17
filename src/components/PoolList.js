import React, { Component } from 'react'
import { DebounceInput } from 'react-debounce-input';
import Pool from './Pool'


class PoolList extends Component {
    state = { pools: [1, 2, 3, 4, 5, 6, 7, 8, 9] }

    render() {
        const { pools } = this.state

        return (
            <div className='pool-list'>
                <div>
                <div className="search-input-wrapper">
                            <DebounceInput
                                type="text"
                                minLength={0}
                                debounceTimeout={300}
                                onChange={(event) => {}}
                                placeholder="Search by content or user"
                                value='Search' />
                        </div>
                </div>
                <div>
                    {pools.map(p => <Pool p={p} />)}
                </div>
            </div>
        )
    }
}


export default PoolList