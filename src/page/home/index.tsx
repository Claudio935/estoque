import React from 'react'
import {
    Stack,
} from '@mui/material'
import DataTable from '../../component/table'
import { StyledTextField } from '../../component/textField'
import { StyledButton } from '../../component/button'


function Home() {
    const dataHeader = ['Id', 'Nome', 'Categoria', 'Quantidade', 'Valor']
    const dataBody = ['1', '2', '3', '4', '5']


    return (

        <Stack sx={{ padding: '20px' }} spacing={2} direction={'column'}>
            <Stack direction={'row'} spacing={2}>
                <StyledTextField
                    label='Buscar Produtos'
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />
                <StyledButton>Pesquisar</StyledButton>
            </Stack>
            <DataTable dataHeader={dataHeader} dataBody={dataBody} />
        </Stack>

    )
}

export default Home