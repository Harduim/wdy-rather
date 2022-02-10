import React, { Component } from 'react'
import { connect } from 'react-redux'
import avatar_icon_blue from '../assets/avatar_icon_blue.png'
import avatar_icon_red from '../assets/avatar_icon_red.png'
import avatar_icon_green from '../assets/avatar_icon_green.png'

const avatars = {
    avatar_icon_blue,
    avatar_icon_red,
    avatar_icon_green,
}


class Avatar extends Component {
    render() {
        const { authedUser, users } = this.props
        const currentUser = users[authedUser]

        return (
            <div>
                <img
                    className='avatar'
                    alt="User avatar image"
                    src={avatars[currentUser.avatarURL]}
                    />
                    {currentUser.name}
            </div>
        );
    }
}


const mapStateToProps = state => { return { authedUser: state.authedUser, users: state.users } }


export default connect(mapStateToProps)(Avatar)