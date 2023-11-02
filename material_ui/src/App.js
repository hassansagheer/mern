import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import HeroSection from "./Components/HeroSection";

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';

function App() {
  return (
    <>
    <ResponsiveAppBar />
    <HeroSection />

    <Container maxWidth="xl" sx= { { backgroundColor: 'white' }}>
      <Grid container spacing={2} sx={{marginTop: 10}}>
        <Grid item sm={2} border={1} borderColor="primary.main" sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
        <Grid item xs={12} sm={5} border={1} borderColor="primary.main">
          <div>
            <Typography variant="h6" fontSize={30} sx={{color: '#000000'}}>
              This weeks specials!
            </Typography>
          </div>
          <br></br>
        </Grid>
        {/* <Grid item border={1} borderColor="primary.main"></Grid> */}
        <Grid item xs={12} sm={3} border={1} borderColor="primary.main">
          <div>
            <Button variant="contained" href="#contained-buttons"  sx={{ color: '#000000', backgroundColor: '#F4EC14', borderRadius: '10px', boxShadow: 0, '&:hover': { color: '#000000', backgroundColor: '#F4EC14' }}} style={{textTransform: 'none'}}>
              Online Menu
            </Button>
          </div>
        </Grid>
        {/* <Grid item sm={2} border={1} borderColor="primary.main"></Grid> */}
      </Grid>

      {/* Cards Grid */}
<Grid container spacing={2}>
    <Grid item xs={2} sm={2}><Typography>Left column</Typography></Grid>
  <Grid item xs={8} sm={8}>
    <Grid container spacing={2}>
      <Grid item xs={4} sm={4}>
        <Typography>First column</Typography>
      </Grid>
      <Grid item xs={4} sm={4}>
        <Typography>Second column</Typography>
      </Grid>
      <Grid item xs={4} sm={4}>
        <Typography>Third column</Typography>
      </Grid>
    </Grid>
  </Grid>
  <Grid item xs={2} sm={2}>
    <Typography>Right column</Typography>
  </Grid>
</Grid>

    </Container>    
    </>
  );
}

export default App;