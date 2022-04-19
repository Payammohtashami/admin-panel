import React,{useContext} from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import HeaderContainer from './header';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import {SidebarContext} from '../../context/OpenContext';

const Index = () => {
  const {state, setState} = useContext(SidebarContext)
    function handleClick(event) {
        event.preventDefault();
    }
    const tagStyle = {
        fontSize: "16px",
        fontWeight: "700",
        "@media(max-width: 600px)": {
            fontSize : "14px",
        }
    }
    const linkStyle = {
        color: "#7B809A",
        fontSize : "14px",
        textDecoration : "none",
        cursor: "pointer",
            "@media(max-width: 600px)": {
                fontSize : "12px",
            }
    }
    const menuIconStyle = {
        transform: "translateY(-6px)",
        display: "none",
        "@media(max-width: 900px)": {
            display: "block"
        }
    }
    return (
        <div className='header-container'>
            <Box>
                <Box sx={{display: "flex"}} role="presentation" onClick={handleClick}>
                        <IconButton onClick={() => setState({left: true})} sx={menuIconStyle}>
                            <MenuIcon />
                        </IconButton>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link sx={linkStyle}>
                            <HomeIcon />
                        </Link>
                        <Link sx={linkStyle}>Pages</Link>
                        <Typography sx={linkStyle} >Analyics</Typography>
                    </Breadcrumbs>
                </Box>
                <Typography sx={tagStyle} component="p">Analyics</Typography>
            </Box>
            <div>
                <HeaderContainer />
            </div>
        </div>
    );
};

export default Index;