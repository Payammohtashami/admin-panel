import React,{Fragment,useContext} from 'react';
import {Grid,Paper,Box,SwipeableDrawer} from '@mui/material';
import {SidebarContext} from '../../context/OpenContext';
// components
import Topbar from './Topbar';
const Index = () => {
    const {state, setState} = useContext(SidebarContext)
    const toggleDrawer = (anchor, open) => (event) => {
        if (
          event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({[anchor]: open });
      };
      const list = (anchor) => (
        <Box
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
        </Box>
      );
    const SideBarStyle = {
        background: "var(--black-gradient)",
        borderRadius: "12px",
        margin: "16px 0",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "6rem",
        "@media(max-width: 900px)": {
            display: "none"
        }

    }
    const mobileSidebar = {
        background: "var(--black-gradient)",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "6rem"
    }
    return (
        <Grid>
            <Grid>
                {['left'].map((anchor) => (
                    <Fragment key={anchor}>
                        <SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}> {list(anchor)}
                            <Box sx={mobileSidebar}>
                                <Topbar />
                            </Box>
                        </SwipeableDrawer>
                    </Fragment>
                ))}
            </Grid>
            <Grid>
                <Paper elevation={3} sx={SideBarStyle}>
                    <Topbar />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Index;