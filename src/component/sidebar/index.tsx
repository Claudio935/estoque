import React from 'react'
import {
    Drawer,
    Toolbar,
    Typography,
} from '@mui/material'



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
            <Typography
                variant='body1'
                sx={{ flexGrow: 1, fontWeight: 900, }} color={'white'}>Olá usuário!
            </Typography>
        </Drawer>


    )
}

export default Sidebar;
