import React,{useState} from 'react';
// Material-UI
import {
    List,
    Typography,
    Collapse,ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import {styled} from "@mui/material/styles"
// Material-icon
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const PageMenu = ({IconUrl,FeildName}) => {
    const [open, setOpen] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const profileHandler = () => {
        setOpenProfile(!openProfile)
    }
    const handleClick = () => {
        setOpen(!open);
    };
    const active = () =>{
        if(open) {
            return {
                backgroundColor : "var(--dark-mud-color)",
                borderRadius: "4px",
            }
        }
    }
    const RedHover = styled('div')(({ theme }) => ({
        '&:hover': {
            animation: "scale-down-hor-center 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
            borderRadius: "4px",
            backgroundColor: "var(--red-color)",
        }
        
      }));
      
    return (
        <List sx={{color: 'white'}}  component="nav" aria-labelledby="nested-list-subheader">
            <RedHover>
                <ListItemButton style={active()} onClick={handleClick}>
                    <ListItemIcon >
                        <IconUrl className='white-text' />
                    </ListItemIcon>
                    <ListItemText className='font14'  primary={FeildName} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </RedHover>
            <Collapse in={open}  timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <RedHover>
                        <ListItemButton onClick={profileHandler} sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Typography className='white-text'>A</Typography>
                            </ListItemIcon>
                            <ListItemText className='font14' primary="Profile" />
                            {openProfile ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                    </RedHover>
                        <Collapse in={openProfile}  timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <RedHover>
                                    <ListItemButton sx={{ pl: 5 }}>
                                        <ListItemIcon>
                                            <Typography className='white-text'>P</Typography>
                                        </ListItemIcon>
                                    <ListItemText className='font14' primary="Profile Overview" />
                                    </ListItemButton>
                                </RedHover>
                                <RedHover>
                                    <ListItemButton sx={{ pl: 5 }}>
                                        <ListItemIcon>
                                            <Typography className='white-text'>A</Typography>
                                        </ListItemIcon>
                                        <ListItemText className='font14' primary="All project" />
                                    </ListItemButton>
                                </RedHover>
                            <RedHover>
                                <ListItemButton sx={{ pl: 5 }}>
                                    <ListItemIcon>
                                        <Typography className='white-text'>M</Typography>
                                    </ListItemIcon>
                                    <ListItemText className='font14' primary="Messages" />
                                </ListItemButton>
                            </RedHover>
                            </List>
                        </Collapse>
                    <RedHover>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Typography className='white-text'>S</Typography>
                            </ListItemIcon>
                            <ListItemText className='font14' primary="Smart Home" />
                        </ListItemButton>
                    </RedHover>
                </List>
            </Collapse>
        </List>
    );
};

export default PageMenu;