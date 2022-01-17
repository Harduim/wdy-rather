import React, { Component } from 'react'
import { Avatar, Container } from '@mui/material';
import avatar_icon_blue from '../assets/avatar_icon_blue.png'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';


class UserAvatar extends Component {
    render() {
        return (
            <Container sx={{textAlign: 'center'}}>
                <Avatar alt="Remy Sharp" src={avatar_icon_blue} />
                <div>Usename</div>
                <div>Score: 99</div>
            </Container>
        );
    }
}

export default UserAvatar