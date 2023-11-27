import React from 'react'
import {
    Box,
} from '@mui/material'
import DataTable from '../../component/table'


function Home() {
    const dataHeader = ['Id', 'Nome', 'Categoria', 'Quantidade', 'Valor']
    const dataBody = ['1', '2', '3', '4', '5']


    return (

        <Box sx={{ padding: '20px' }}>
            <DataTable dataHeader={dataHeader} dataBody={dataBody} />
        </Box>

    )
}

export default Home