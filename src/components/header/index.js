import React,{useContext} from 'react';
// Components
import HeaderContainer from './header';
// Material-UI
import {
    Typography,
    Breadcrumbs,
    Link,
    Box, 
    Container, 
    IconButton 
} from '@mui/material';
// Material-icon
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
// Context
import {SidebarContext} from '../../context/OpenContext';
const Index = () => {
  const {setState} = useContext(SidebarContext)
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
    const headerContainer = {
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
      }
    return (
        <Container sx={headerContainer}>
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
        </Container>
    );
};

export default Index;