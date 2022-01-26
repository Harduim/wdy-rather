import React, { Component } from 'react'
import avatar_icon_blue from '../assets/avatar_icon_blue.png'


class Avatar extends Component {
    render() {
        return (
            <img
                width={161}
                height={170}
                alt="User avatar image"
                src={avatar_icon_blue}
            />
        );
    }
}

export default Avatar