import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Box,Menu,IconButton,Badge,MenuItem,Dialog} from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import SignIn from '../sign-in/signIn';

function SimpleDialog(props) {
  const {onClose,selectedValue,open} = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  
  return (
    <Dialog onClose={handleClose} open={open}>
      <SignIn />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default function PrimarySearchAppBar() {
  const [open,setOpen] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const iconStyle = {
    color: "var(--gray-color)",
    fontSize: "20px"
  }
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{vertical: 'top',horizontal: 'right',}}
      id={mobileMenuId} keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right',}}
      open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton  onClick={handleClickOpen}>
          <AccountCircle sx={iconStyle}/>
        </IconButton>
        <SimpleDialog open={open} onClose={handleClose}/>
      </MenuItem>
      <MenuItem>
        <IconButton size="small">
          <SettingsIcon  sx={iconStyle}/>
        </IconButton> 
      </MenuItem>
      <MenuItem>
        <IconButton size="small">
          <Badge  sx={iconStyle} color='error' badgeContent={15}>
            <NotificationsIcon sx={iconStyle} />
          </Badge>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
      <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
        <Box size="large" aria-controls={mobileMenuId} onClick={handleMobileMenuOpen}>
          <MoreIcon />
        </Box>
        {renderMobileMenu}
      </Box>
  );
}