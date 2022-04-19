import React,{useState,createContext} from 'react';
import PropTypes from 'prop-types';
// Components
import {SimpleDialog} from '../../helper/function';
// Material
import {Box,IconButton,Badge} from '@mui/material';
// Material icon
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import More from './More'

export const SignInContext = createContext();

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const iconStyle = {
  transform: "translateY(-5px)"
}

const SearchContainer = () => {
  
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
    return (
      <SignInContext.Provider value={{open, setOpen}}>
        <Box sx={{display: "flex"}}>
            <Box sx={{ flexGrow: 1 }}  />
                <Box sx={{ display: { xs: 'none',sm: 'flex', md: 'flex',marginRight: "20px" } }} style={iconStyle}>
                  <IconButton onClick={handleClickOpen} size="medium" aria-haspopup="true" style={{color: "var(--gray-color)"}}>
                      <AccountCircle/>
                      <SimpleDialog  open={open} onClose={handleClose} />
                  </IconButton>
                  <IconButton size="medium"  style={{color: "var(--gray-color)"}}>
                      <SettingsIcon />
                  </IconButton> 
                  <IconButton size="medium" style={{color: "var(--gray-color)"}}>
                      <Badge color='error' badgeContent={15}>
                          <NotificationsIcon style={{color: "var(--gray-color)"}} />
                      </Badge>
                  </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'flex' ,sm:'none', md: 'none' } }} style={iconStyle}>
                    <IconButton size="medium" aria-haspopup="true" sx={{color: "var(--gray-color)" ,svg : {fontSize: "18px"}}}>
                      <More/>
                    </IconButton>
                </Box>
        </Box>
      </SignInContext.Provider>
    );
};

export default SearchContainer;