import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const TableB = () => {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];


    const data = [{
        "id": 1,
        "first_name": "Thornie",
        "last_name": "Bradder",
        "email": "tbradder0@mail.ru",
        "gender": "Male"
      }, {
        "id": 2,
        "first_name": "Carroll",
        "last_name": "Pickance",
        "email": "cpickance1@mashable.com",
        "gender": "Female"
      }, {
        "id": 3,
        "first_name": "Trescha",
        "last_name": "Healy",
        "email": "thealy2@yahoo.co.jp",
        "gender": "Female"
      }, {
        "id": 4,
        "first_name": "Reece",
        "last_name": "Bracchi",
        "email": "rbracchi3@microsoft.com",
        "gender": "Male"
      }, {
        "id": 5,
        "first_name": "Cookie",
        "last_name": "Provest",
        "email": "cprovest4@odnoklassniki.ru",
        "gender": "Female"
      }, {
        "id": 6,
        "first_name": "Valentijn",
        "last_name": "McGarvie",
        "email": "vmcgarvie5@washingtonpost.com",
        "gender": "Male"
      }, {
        "id": 7,
        "first_name": "Desmond",
        "last_name": "Lesly",
        "email": "dlesly6@tmall.com",
        "gender": "Male"
      }, {
        "id": 8,
        "first_name": "Jaimie",
        "last_name": "Giampietro",
        "email": "jgiampietro7@cnn.com",
        "gender": "Female"
      }, {
        "id": 9,
        "first_name": "Almeta",
        "last_name": "Twinterman",
        "email": "atwinterman8@marketwatch.com",
        "gender": "Female"
      }, {
        "id": 10,
        "first_name": "Janet",
        "last_name": "Burchatt",
        "email": "jburchatt9@w3.org",
        "gender": "Female"
      }]
      

    return (
        <>
            <h1 className='text-center display-3 fw-bold'>Table</h1>
            <TableContainer component={Paper} sx={{"width":850}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Gender</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.first_name}</TableCell>
                                <TableCell align="right">{row.last_name}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.gender}</TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}
