import * as React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Collapse,
    IconButton
} from "@mui/material";
import RecordDetails from "./recordDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


function details() {
    return {
        start: "Bonn",
        end: "Cologne",
        time: "3 Hours",
        totalDelivered: 20,
        weight: "200 Kgs"
    };
}

function createData(
    name, deliveriCount, date, status
) {
    const detail = details();
    return { name, deliveriCount, date, status, detail };
}

const columns = [
    "Name", "Delivery Count", "Date", "Status"
]
const rows = [
    createData("Trip 1", "20", "25 September 2022", "Done"),
    createData("Trip 2", "100", "26 September 2022", "Failed")
];

function Cell(props) {
    const {data, component, scope} = props;
    return(
        <TableCell component={component} scope={scope} sx={{ color: "#2e3b48" }}>{data}</TableCell>
    )
}

function Row({ row }) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </TableCell>
                <Cell data={row.name}/>
                <Cell data={row.deliveriCount}/>
                <Cell data={row.date}/>
                <Cell data={row.status}/>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <RecordDetails row={row} componentName='trip' />
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default function TripTable() {
    return (
        <>
            <h2>Trip</h2>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        {columns.map((column) => (
                            <TableCell sx={{ color: "white" }} key={column}>{column}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </>
    );
}


