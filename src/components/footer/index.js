import React from 'react';
import {Box,Typography,Link, Button, Divider} from '@mui/material';

const index = () => {
    const footerStyle = {
        display: "flex",
        justifyContent:"space-between",
        width: "98%",
        margin: "42px 0",
        "@media(max-width: 600px)": {
            display: "block",
            textAlign : "center"
        }
    }
    const link = {
        a:{
            padding: "0 15px",
            textDecoration: "none",
        }
    }
    const copyRightStyle = {
        fontSize: "16px",
        color: "var(--gray-color)",
        "@media(max-width: 600px)": {
            fontSize: "13px"
        }
    }
    const dividerStyle = {
            display : "none",
            width : "100%",
            margin: "0 auto",
            height: "0.5px",
            backgroundColor: "var(--dark-snow-color)",
            color: "#E91F63",
            "@media(max-width: 600px)": {
                display : "block"
            }
        }
    const buttonStyle = {
        color : "var(--gray-color)",
        fontSize: "12px"
    }
    return (
        <Box sx={footerStyle}>
            <Box sx={link} className="footer-link">
                <Link><Button sx={buttonStyle}>About Us</Button></Link>
                <Link><Button sx={buttonStyle}>Blog</Button></Link>
                <Link><Button sx={buttonStyle}>License</Button></Link>
            </Box>
            <Divider sx={dividerStyle}/>
            <Box>
                <Typography sx={copyRightStyle}>
                    © 2022, made with <span sx={{color: "var(--red-color)" , fontSize: "20px"}}>♥</span> by <span sx={{fontWeight: "700"}}>Payam</span>
                </Typography>
            </Box>
        </Box>
    );
};
export default index;