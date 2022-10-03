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
    location: "Bonn",
    time: "10 Hours",
    totalTrips: 40
  };
}

function createData(
  name, length, width, height, cost
) {
  const detail = details();
  return { name, length, width, height, cost, detail };
}

const columns = [
  "Name", "Length", "Width", "Height", "Cost"
]
const rows = [
  createData("Truck", "100 cm", "50 cm", "30 cm", "10 Euros / Hour"),
  createData("Van", "70 cm", "25 cm", "15 cm", "8 Euros / Hour")
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
        <Cell component="th" scope="row" data={row.name}/>
        <Cell data={row.length}/>
        <Cell data={row.width}/>
        <Cell data={row.height}/>
        <Cell data={row.cost}/>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <RecordDetails row={row} componentName="vehicle" />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}


export default function VehicleTable() {
  return (
    <>
      <h2>Vehicles</h2>
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


