import React, { Component } from 'react'
import avatar_icon_blue from '../assets/avatar_icon_blue.png'
import avatar_icon_red from '../assets/avatar_icon_red.png'
import avatar_icon_green from '../assets/avatar_icon_green.png'

const avatars = {
  avatar_icon_blue,
  avatar_icon_red,
  avatar_icon_green
}

class Avatar extends Component {
  render () {
    const { user } = this.props

    return (
      <div>
        <img
          className='avatar'
          alt='User avatar image'
          src={avatars[user.avatarURL]}
        />
        {user.name}
      </div>
    )
  }
}

export default Avatar
