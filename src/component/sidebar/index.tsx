import React from 'react'
import {
    Drawer,
    List,
    ListItem,
    Toolbar,
    Typography,
} from '@mui/material'
import { Link } from 'react-router-dom';



const Sidebar = () => {


    return (
        <Drawer
            variant='permanent'
            anchor="left"
            sx={{
                ['& .MuiDrawer-paper']:
                    { width: '180px', background: '#3b3131', textAlign: 'center' },

            }} >
            <Toolbar sx={{ marginBottom: '20px' }} />
            <List>
                <ListItem>
                    <Typography
                        variant='body1'
                        sx={{ flexGrow: 1, fontWeight: 900, }} color={'white'}>Olá usuário!
                    </Typography>
                </ListItem>
                <ListItem>
                    <Link to={'/'}>Home</Link>
                </ListItem>
            </List>
        </Drawer>


    )
}

export default Sidebar;
