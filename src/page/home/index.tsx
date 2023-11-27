import React from 'react'
import {
    Box,
} from '@mui/material'
import DataTable from '../../component/table'
import { StyledTextField } from '../../component/textField'


function Home() {
    const dataHeader = ['Id', 'Nome', 'Categoria', 'Quantidade', 'Valor']
    const dataBody = ['1', '2', '3', '4', '5']


    return (

        <Box sx={{ padding: '20px' }}>
            <StyledTextField
                label='Buscar Produtos'
                fullWidth
                variant="outlined"
                margin="normal"
            />
            <DataTable dataHeader={dataHeader} dataBody={dataBody} />
        </Box>

    )
}

export default Home