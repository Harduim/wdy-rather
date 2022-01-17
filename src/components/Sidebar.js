import React, { Component } from 'react'
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import UserAvatar from './Avatar';

const drawerWidth = 240;



class Sidebar extends Component {
    render() {
        return (
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <UserAvatar />
                <Divider />
                <List>
                    {['Home', 'Add new', 'Leaderboard'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} sx={{ textAlign: "right" }} />
                        </ListItem>
                    ))}
                    <Divider />
                    <ListItem button key={'Sign Out'}>
                        <ListItemText primary={'Sign Out'} sx={{ textAlign: "right" }} />
                    </ListItem>
                </List>
                <Toolbar />


            </Drawer>
        )
    }
}

export default Sidebar