import React, { Component } from 'react'
import Avatar from './Avatar'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'


class Pool extends Component {
    render() {
        const { p, users } = this.props
        const user = users[p.author]

        return (
            <div className='pool-card' key={p.id}>
                <div className='pool-header'>
                    <div><b>{user.name} Asks:</b></div>
                </div>
                <div className='pool-body row'>
                    <div className='col-3 pool-avatar'><Avatar user={user} /></div>
                    <div className='col-9'>
                        <div><b>Would You Rather</b></div>
                        <div>
                            <div>{p.optionOne.text}</div>
                            <div>or..</div>
                            <div>{p.optionTwo.text}</div>
                        </div>
                        <br />
                        <div style={{ textAlign: 'center' }}><NavLink to={`/questions/${p.id}`} >View pool</NavLink></div>
                    </div>
                </div>

            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Pool);