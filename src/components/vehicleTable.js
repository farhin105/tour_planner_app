import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";

function createData(
  name, length, width, height, cost
) {
  return { name, length, width, height, cost };
}

const columns = [
  "Name", "Length", "Width", "Height", "Cost"
]
const rows = [
  createData("Truck", "100 cm", "50 cm", "30 cm", "10 Euros / Hour"),
  createData("Van", "70 cm", "25 cm", "15 cm", "8 Euros / Hour")
];

export default function VehicleTable() {
  return (
    <>
    <h2>Vehicles</h2>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell sx={{color:"white"}} key={column}>{column}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name} >
            <TableCell sx={{color:"#dee0eb"}} component="th" scope="row">{row.name}</TableCell>
            <TableCell sx={{color:"#dee0eb"}}>{row.length}</TableCell>
            <TableCell sx={{color:"#dee0eb"}}>{row.width}</TableCell>
            <TableCell sx={{color:"#dee0eb"}}>{row.height}</TableCell>
            <TableCell sx={{color:"#dee0eb"}}>{row.cost}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  );
}


