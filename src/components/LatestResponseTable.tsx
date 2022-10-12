import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';


const StatusSpan = styled.span`
  padding: 5px;
  border-radius: 5px;
  &.Pending {
    color: goldenrod;
    background-color: rgba(189, 189, 3, 0.103);
  }
  &.Approved {
    color: green;
    background-color: rgba(0, 128, 0, 0.151);
  }
`;

const Title = styled.span`
  font-weight: bold;
`;

function LatestResponseTable() {
    const rows = [
        {
          id: 1143155,
          customer: "John Smith",
          date: "1 March",
          location: 312312,
          status: "Pending",
        },
        {
          id: 2235235,
          customer: "Michael Doe",
          date: "1 March",
          location: 423199,
          status: "Approved",

        },
        {
          id: 2342353,
          customer: "John Smith",
          date: "1 March",
          location: 523199,
          status: "Approved",

        },
        {
          id: 2357741,
          customer: "Jane Smith",
          date: "1 March",
          location: 623176,
          status: "Pending",
        },
        {
          id: 2342355,
          customer: "Harold Carol",
          date: "1 March",
          location: 219133,
          status: "Approved",
        },
      ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><Title>Tracking ID</Title></TableCell>
            <TableCell align="center"><Title>Customer</Title></TableCell>
            <TableCell align="center"><Title>Date</Title></TableCell>
            <TableCell align="center"><Title>Location</Title></TableCell>
            <TableCell align="center"><Title>Status</Title></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.customer}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.location}</TableCell>
              <TableCell align="center">
                <StatusSpan className={`${row.status}`}>{row.status}</StatusSpan>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LatestResponseTable;