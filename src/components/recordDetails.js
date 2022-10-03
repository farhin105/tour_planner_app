import * as React from "react";
import "./recordDetails.css";

function RecordDetails(props) {
    const { row, componentName } = props;
    console.log(row)
    if (componentName === 'trip') {
        return (
            <div className="record-details-container">
                <h3>Details</h3>
                <p>{row.name} Start: {row.detail.start}</p>
                <p>{row.name} End: {row.detail.end}</p>
                <p>Total {row.name} Time: {row.detail.time}</p>
                <p>Total Parcel Delivered: {row.detail.totalDelivered}</p>
                <p>Total Weight of the Parcels: {row.detail.weight}</p>
            </div>
        );
    }
    else {
        return (
            <div className="record-details-container">
                <h3>Details</h3>
                <p>Location: {row.detail.location}</p>
                <p>Total service time: {row.detail.time}</p>
                <p>Total trips: {row.detail.totalTrips}</p>
            </div>
        );
    }
}

export default RecordDetails;