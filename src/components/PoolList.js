import React, { Component } from 'react'
import { DebounceInput } from 'react-debounce-input';
import Pool from './Pool'
import { connect } from 'react-redux'


class PoolList extends Component {
    render() {
        const { pools } = this.props

        return (
            <div className='pool-list'>
                <div>
                    <div className="search-input-wrapper">
                        <DebounceInput
                            type="text"
                            minLength={0}
                            debounceTimeout={300}
                            onChange={(event) => { }}
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


function mapStateToProps(state, ownProps) {

    return {
        pools: state.pools
    }
}

export default connect(mapStateToProps)(PoolList)