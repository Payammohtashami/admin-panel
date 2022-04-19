import React from 'react';
import './index.scss'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import StoreSharpIcon from '@mui/icons-material/StoreSharp';
import Card from './card';
const index = () => {
    return (
        <div className='dataCard-container'> 
            <Card title="Booking" amount="281" background={"var(--black-2-gradient)"} Icon={AccountCircleIcon} persentText="than last week" persent="+55%" />
            <Card title="Today’s Users" amount="2,300" background={"var(--purple-gradient)"} Icon={BarChartIcon} persentText="than last week" persent="+3%" />
            <Card title="Revenue" amount="34K" background={"var(--green-gradient)"} Icon={StoreSharpIcon} persentText="than yesterday" persent="+1%" />
            <Card title="Followers" amount="+91" background={"var(--blue-gradient)"} Icon={PersonAddAltSharpIcon} persentText="" persent="Just updated" />
        </div>
    );
};

export default index;