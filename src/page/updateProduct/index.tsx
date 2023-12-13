import { Stack } from '@mui/material'
import { StyledTextField } from '../../component/textField'
import { StyledButton } from '../../component/button'

const UpdateProduct = () => {
    return (
        <Stack sx={{ padding: '20px' }} spacing={2} direction={'column'}>
            <Stack direction={'row'} spacing={2} >
                <StyledTextField label={'Nome do produto'} fullWidth />
                <StyledTextField label={'Categoria'} fullWidth />
            </Stack>
            <Stack direction={'row'} spacing={2} >
                <StyledTextField label={'Quantidade em estoque'} fullWidth />
                <StyledTextField label={'Valor do estoque'} fullWidth />
            </Stack>
            <Stack direction={'row'}>
                <StyledButton sx={{ padding: '10px' }}>Adicionar produto</StyledButton>
            </Stack>
        </Stack>
    )
}
export default UpdateProduct