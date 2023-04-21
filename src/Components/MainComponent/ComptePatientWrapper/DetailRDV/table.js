import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { auto } from "@popperjs/core";

export default function BasicTable({ rows, tableHeader }) {
  return (
    <TableContainer component={Paper} style={{ marginBottom: '30px' }}>
      <Table sx={{ minWidth: auto }} aria-label="simple table">
        <TableHead name="Header" value="heading">{tableHeader}</TableHead>
        <TableBody style={{ borderTop: '2px solid darkgray' }}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
