import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { auto } from "@popperjs/core";

export default function TypoText({ rowsText }) {
  return (
    <TableContainer style={{ width: "fit-content", marginBottom: "30px" }}>
      <Table
        sx={{
          minWidth: auto,
          width: auto,
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
        }}
        aria-label="simple table"
      >
        <TableHead name="Header" value="heading"></TableHead>
        <TableBody>
          {rowsText.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{
                  fontSize: 14,
                  width: "50px",
                  color: "grey",
                  padding: '7px 16px',
                  lineHeight: '17px',
                }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: 14,
                  padding: '7px 16px',
                  lineHeight: '17px',
                }}
                align="left"
              >
                {row.calories}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
