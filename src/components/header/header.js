import React,{useState} from 'react';
import PropTypes from 'prop-types';
// Components
import More from './More'
import SignIn from '../sign-in/signIn';
// Material
import {Box,IconButton,Badge,Dialog} from '@mui/material';
// Material icon
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

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

const SearchContainer = () => {
  
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  
  const iconStyle = {
    transform: "translateY(-5px)"
  }
    return (
        <Box sx={{display: "flex"}}>
            <Box sx={{ flexGrow: 1 }}  />
                <Box sx={{ display: { xs: 'none',sm: 'flex', md: 'flex',marginRight: "20px" } }} style={iconStyle}>
                  <IconButton onClick={handleClickOpen}>
                    <AccountCircle />
                  </IconButton>
                  <SimpleDialog open={open} onClose={handleClose}/>
                  <IconButton size="small"  sx={{color: "var(--gray-color)"}}>
                      <SettingsIcon />
                  </IconButton> 
                  <IconButton size="small" sx={{color: "var(--gray-color)"}}>
                      <Badge color='error' badgeContent={15}>
                          <NotificationsIcon sx={{color: "var(--gray-color)"}} />
                      </Badge>
                  </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'flex' ,sm:'none', md: 'none' } }} style={iconStyle}>
                    <IconButton size="small" sx={{color: "var(--gray-color)" ,svg : {fontSize: "18px"}}}>
                      <More/>
                    </IconButton>
                </Box>
        </Box>
    );
};

export default SearchContainer;