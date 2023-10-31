import ResponsiveAppBar from "./Components/ResponsiveAppBar";

import * as React from 'react';
import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import restauranfood from './restauranfood.jpg';

function App() {
  return (
    <>
    <ResponsiveAppBar />

    <Container maxWidth="xl" sx= { { backgroundColor: '#495E57' }}>
    {/* <Box border={1} borderColor="primary.main"> */}
    <Grid container spacing={2} sx={{marginTop: 0}}>
        <Grid item sm={2} border={1} borderColor="primary.main">
          {/* <p>xs=2</p> */}
        </Grid>
        <Grid item xs={8} sm={4} border={1} borderColor="primary.main">
          <div>
            <Typography variant="h1" fontSize={60} sx={{color: '#F4EC14'}}>
              Little Lemon
            </Typography>
            <Typography variant="h2" fontSize={30} sx={{color: '#EDEFEE'}}>
              Chicago
            </Typography>
          </div>
          <br></br>
          <div>
            <Typography variant="p" fontSize={20} color="#EDEFEE" align="justify">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </Typography>
          </div>
          <br/>
          <div>
            <Button variant="contained" href="#contained-buttons"  sx={{ color: '#000000', backgroundColor: '#F4EC14', borderRadius: '10px', '&:hover': { color: '#000000', backgroundColor: '#F4EC14', boxShadow: 0 }}}>
              Reserve a Table
            </Button>
          </div>
          <br></br>
        </Grid>
        <Grid item sm={1} border={1} borderColor="primary.main">
          {/* <p>xs=1</p> */}
        </Grid>
        <Grid item xs={4} sm={3} border={1} borderColor="primary.main">
        <Card sx={{ maxWidth: 250, borderRadius: '10px' }}>
          <CardMedia
          component="img"
          height="250"
          image={restauranfood}
          alt="restauranfood"
          sx={{ width: '100%', objectFit: 'cover' }}
          />
        </Card>
        </Grid>
        <Grid item sm={2} border={1} borderColor="primary.main">
          {/* <p>xs=2</p> */}
        </Grid>
      </Grid>
      {/* </Box> */}
    </Container>
    </>
  );
}

export default App;