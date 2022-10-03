import * as React from 'react';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import './home.css'
import VehicleTable from './vehicleTable';
import TripTable from './tripTable';

export default function Home() {
    const [tabNumber, setTabNumber] = React.useState('1');

    // change tab value
    const handleTabChange = (event, newValue) => {
        setTabNumber(newValue);
    };

    return (
        <div className='tab-container'>
            <TabContext value={tabNumber} >
                <TabList centered variant='fullWidth'
                    onChange={handleTabChange} >
                    <Tab label="Trips" value="1" />
                    <Tab label="Vehicles" value="2" />
                </TabList>
                <TabPanel value="1">
                    <TripTable />
                </TabPanel>
                <TabPanel value="2">
                    <VehicleTable />
                </TabPanel>
            </TabContext>
        </div>
    );
}