import React from 'react';
// Components
import Header from '../header/index';
import DataCard from '../dataCard/index';
// Material-UI
import { Box, Container } from '@mui/material';

const index = () => {
  const containerStyle = {
    marginTop:"40px",
    "@media(max-width: 900px)" : {
      marginTop: "00px"
    }
  }
  return (
    <Container sx={containerStyle}>
      <Box>
        <Header />
        <DataCard />
      </Box>
    </Container>
  );
};

export default index;