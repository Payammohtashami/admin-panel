import React,{useState} from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import {List,ListItemAvatar,Typography,Collapse,ListItemButton,Divider,Avatar} from '@mui/material';
import NfcRoundedIcon from '@mui/icons-material/NfcRounded';
import avatar from '../../assets/image/avatar.jpg';
import PageMenu from './PageMenu';
import PanoramaIcon from '@mui/icons-material/Panorama';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ErrorIcon from '@mui/icons-material/Error';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArticleIcon from '@mui/icons-material/Article';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GridViewIcon from '@mui/icons-material/GridView';
import {styled} from "@mui/material/styles"
const Topbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const RedHover = styled('div')(({ theme }) => ({
        borderRadius: "4px",
        '&:hover': {
          backgroundColor: "var(--red-color)",
        }
      }));
      
    const active = () =>{
        if(open) {
            return {
                backgroundColor : "var(--dark-mud-color)",
                borderRadius: "4px",
                "&:hover" :{
                    backgroundColor : "var(--red-color)"
                }
            }
        }
    }
    return (
        <div>
            <List sx={{color: 'white'}} component="nav">
                <ListItemButton >
                <ListItemIcon >
                    <NfcRoundedIcon className='white-text' />
                </ListItemIcon>
                    <ListItemText className='bold-text' primary="Material Dashbord" />
                </ListItemButton>
            </List>
            <Divider className='white-text' variant="middle" />
            <List>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={avatar} />
                </ListItemAvatar>
                <ListItemText secondary={<Typography sx={{ display: 'inline' }} component="span" variant="body2" className='white-text'>Payam Mohtashami</Typography>}/>
            </ListItemButton>
            </List>
            <Divider className='white-text' variant="middle" />
            <div className='sidebar-menu-container'>
                
            <List  sx={{color: 'white'}} component="nav" aria-labelledby="nested-list-subheader ">
                <RedHover>
                    <ListItemButton style={active()} onClick={handleClick}>
                    <ListItemIcon >
                        <DashboardRoundedIcon  className='white-text' />
                    </ListItemIcon >
                    <ListItemText className='font14'  primary="Dashbord" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                </RedHover>
            <Collapse in={open}  timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <RedHover>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <Typography className='white-text '>A</Typography>
                        </ListItemIcon>
                        <ListItemText className='font14' primary="Analytics" />
                    </ListItemButton>
                </RedHover>
                <RedHover>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <Typography className='white-text '>S</Typography>
                    </ListItemIcon>
                    <ListItemText className='font14' primary="Smart Home" />
                </ListItemButton>
                </RedHover>
                </List>
            </Collapse>
            </List>
            <Typography variant='body2' style={{fontSize: "14px" , fontWeight: "700",marginLeft: "16px"}} component="h3" className='white-text'>Pages</Typography>
            <PageMenu IconUrl={PanoramaIcon} FeildName="Pages" />
            <PageMenu IconUrl={AppsIcon} FeildName="Applications" />
            <PageMenu IconUrl={ShoppingBasketIcon} FeildName="Ecommerce" />
            <PageMenu IconUrl={AssignmentIndIcon} FeildName="Authentication" />
            <PageMenu IconUrl={ErrorIcon} FeildName="Error" />
            <Divider className='white-text' variant="middle" />
            <Typography variant='body2' style={{fontSize: "14px" , fontWeight: "700",marginLeft: "16px",marginTop : "11px"}} component="h3" className='white-text'>Docs</Typography>
            <PageMenu IconUrl={ArticleIcon} FeildName="Basic" />
            <PageMenu IconUrl={GridViewIcon} FeildName="Components" />
            <PageMenu IconUrl={ManageAccountsIcon} FeildName="Changelog" />
            </div>
        </div>
    );
};

export default Topbar;