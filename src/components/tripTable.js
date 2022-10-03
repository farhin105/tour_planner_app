import * as React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@mui/material";

function createData(
    name, deliveriCount, date, status
) {
    return { name, deliveriCount, date, status };
}

const columns = [
    "Name", "Delivery Count", "Date", "Status"
]
const rows = [
    createData("Trip 1", "20", "25 September 2022", "Done"),
    createData("Trip 2", "100", "26 September 2022", "Failed")
];

export default function TripTable() {
    return (
        <>
            <h2>Trip</h2>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell sx={{ color: "white" }} key={column}>{column}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} >
                            <TableCell sx={{ color: "#dee0eb" }} component="th" scope="row">{row.name}</TableCell>
                            <TableCell sx={{ color: "#dee0eb" }}>{row.deliveriCount}</TableCell>
                            <TableCell sx={{ color: "#dee0eb" }}>{row.date}</TableCell>
                            <TableCell sx={{ color: "#dee0eb" }}>{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}


