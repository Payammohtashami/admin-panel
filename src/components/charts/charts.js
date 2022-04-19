import React from 'react';
import { Box, Typography,Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './index.scss';


const charts = ({bg,ChartModol,boxClass}) => {
    

    return (
        <Box className='chart-manager'>
                <ChartModol className="chartssssss" bg={bg} boxClass={boxClass}/>
                <Box style={{width: "90%", margin: "0 auto"}}>
                    <Typography style={{fontWeight : "700" , color: "var(--dark-blue-color  )"}}>Website Views</Typography>
                    <Typography style={{fontWeight : "300" , color: "var(--gray-color)"}}>Last Campaign Performance</Typography>
                    <Divider style={{margin: "16px 0"}} />
                    <Typography style={{ marginBottom: "20px", color: "var(--gray-color"}}><AccessTimeIcon style={{fontSize: "14px",  padding: "0 5px" ,transform: "translateY(2px)"}} />campaign sent 2 days ago</Typography>
                </Box>
        </Box>
    );
};

export default charts; 