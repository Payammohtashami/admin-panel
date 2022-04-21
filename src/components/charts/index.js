import React from 'react';
// COmponents
import BarChart from './BarChart';
import LineChart from './LineChart';
import Charts from './charts';
// Material-UI
import { Grid } from '@mui/material';
// Style-module
import './index.scss';
const index = () => {
    return (
        <Grid className='charts-min-container'>
            <Charts bg="var(--purple-gradient)" ChartModol={BarChart} boxClass="purple-charts" />
            <Charts bg="var(--green-gradient)" ChartModol={LineChart} boxClass="green-charts" />
            <Charts bg="var(--black-2-gradient)" ChartModol={LineChart} boxClass="black-charts" />
        </Grid>
    );
};

export default index;