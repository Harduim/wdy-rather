import React, { Component } from 'react'
import avatar_icon_blue from '../assets/avatar_icon_blue.png'
import { Figure } from 'react-bootstrap';


class Avatar extends Component {
    render() {
        return (
            <Figure className='avatar'>
                <Figure.Image
                    width={161}
                    height={170}
                    alt="User avatar image"
                    src={avatar_icon_blue}
                />
                <Figure.Caption>
                    Username | Score: 99
                </Figure.Caption>
            </Figure>
        );
    }
}

export default Avatar