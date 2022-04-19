import React from 'react';
import './index.scss';
import BarChart from './BarChart';
import LineChart from './LineChart';
import Charts from './charts';
const index = () => {
    return (
        <div className='charts-min-container'>
            <Charts bg="var(--purple-gradient)" ChartModol={BarChart} boxClass="purple-charts" />
            <Charts bg="var(--green-gradient)" ChartModol={LineChart} boxClass="green-charts" />
            <Charts bg="var(--black-2-gradient)" ChartModol={LineChart} boxClass="black-charts" />
        </div>
    );
};

export default index;