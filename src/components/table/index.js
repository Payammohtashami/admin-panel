import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Table from './TableContainer';

const index = () => {
    return (
        <Box style={{marginTop: "25px"}}>
            <Paper sx={{borderRadius: "12px"}} elevation={3}>
                <Typography sx={{margin: "25px",paddingTop: "26px",fontSize: "16px",color: "var(--dark-blue-color)" , fontWeight: "700"}} variant='body2'>Top  Selling Products</Typography>
                <Box style={{width:"95%" , margin: "0 auto", paddingBottom: "25px"}}>
                    <Table />
                </Box>
            </Paper>
        </Box>
    );
};

export default index;