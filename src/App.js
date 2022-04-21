// components
import Sidebar from './components/sidebar/index';
import MainSection from './components/mainSection/index';
import Charts from './components/charts/index';
import Table from './components/table/index';
import Footer from './components/footer/index';
import SidebarContext from './context/OpenContext';
// Material-UI
import {Grid} from '@mui/material';
function App() {
  
  return (
    <SidebarContext>
        <Grid container spacing={2} sx={{padding: " 0 10px"}}>
          <Grid item lg={2.5} md={3}>
            <Sidebar />
          </Grid>
          <Grid item  lg={9.5} md={9} xs={12}>
            <MainSection />
            <Charts />
            <Table />
            <Footer />
          </Grid>
        </Grid>
    </SidebarContext>
  );
}

export default App;
