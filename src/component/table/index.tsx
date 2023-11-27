import React from 'react'
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material'
import { StyledTableCell } from '../../component/tableCell'


interface DataProps {
    dataHeader: string[]
    dataBody: string[]
}


const DataTable = ({ dataHeader, dataBody }: DataProps) => {


    return (
        <TableContainer component={Paper}>
            <Table >
                <TableHead sx={{ background: '#3b3131' }}>
                    <TableRow>
                        {dataHeader.map((item, index) => {
                            return (<StyledTableCell key={index}>
                                {item}
                            </StyledTableCell>)
                        })}

                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataBody.map((item, index) => {
                        return (<StyledTableCell key={index}>
                            {item}
                        </StyledTableCell>)
                    })}

                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default DataTable
