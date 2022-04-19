import React from 'react';
import Box from '@mui/material/Box';
import {Divider, Paper, Typography} from '@mui/material';
const card = ({background,Icon,persentText,persent,title,amount}) => {
    const titleStyle = {
        fontSize : "16px",
        padding: "16px 14px 0 0",
        fontWeight : "300",
        "@media(max-width: 500px)": {
            fontSize: "14px"
        }
    }
    const amountStyle = {
        fontSize : "24px",
        padding : "0 14px 10px 0",
        fontWeight : "700",
        "@media(max-width: 500px)": {
            fontSize: "18px"
        }
    }
    const persentStyle = {
        fontWeight: "300" ,
        margin : "16px",
        "@media(max-width: 500px)":{
            fontSize :"14px"
        }
    }
    return (
        <Paper elevation={3} sx={{borderRadius: "12px",marginTop: "15px"}}>
            <Box >
                <Box className='dataCard-icon-container' sx={{background}}>
                    <Icon />
                </Box>
                <Box>
                    <Typography align='right' sx={titleStyle}>{title}</Typography>
                    <Typography align='right' sx={amountStyle}>{amount}</Typography>
                    <Divider />
                    <Typography sx={persentStyle}><span className='dataCard-persent'> {persent}</span> {persentText}</Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default card;