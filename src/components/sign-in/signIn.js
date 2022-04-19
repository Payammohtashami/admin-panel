import React,{useContext,useEffect} from 'react';
// Material
import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Grid,Box,Typography,Container, IconButton} from '@mui/material';
// Material Style
// icon
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseIcon from '@mui/icons-material/Close';

import {SignInContext} from '../../context/SignInContext'
export default function SignIn() {
  const {open, setOpen} = useContext(SignInContext)
  useEffect(() => {
    console.log("heloo");
  }, [open]);
  return ( 
      <Container component="main" maxWidth="xs">
        <IconButton onClick={() => {setOpen(false)}}>
          <CloseIcon />
        </IconButton>
        <CssBaseline />
        <Box sx={{marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> 
            <LockOutlinedIcon />
          </Avatar >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />}label="Remember me"/>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Typography variant="body2" align="center" sx={{color: "var(--gray-color)",padding: "40px 0 20px"}}>Copyright © Your Website {new Date().getFullYear()} .</Typography>
      </Container>
  );
}