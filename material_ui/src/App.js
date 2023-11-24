import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import HeroSection from "./Components/HeroSection";

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GreekSalad from './icons_assets/greeksalad.jpg';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

function App() {
  return (
    <>
    <ResponsiveAppBar />
    <HeroSection />

    <Container maxWidth="xl" sx= { { backgroundColor: 'white', mb:5 }}>
      <Grid container spacing={2} sx={{marginTop: 10}}>
        <Grid item sm={2} border={1} borderColor="primary.main" sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
        <Grid item xs={12} sm={5} border={1} borderColor="primary.main">
          <div>
            <Typography variant="h6" sx={{fontSize: {xs:25 , sm:30 }, color: '#000000',fontWeight: 'bold'}}>
              This weeks specials!
            </Typography>
          </div>
          <br></br>
        </Grid>
        {/* <Grid item border={1} borderColor="primary.main"></Grid> */}
        <Grid item xs={12} sm={3} border={1} borderColor="primary.main">
          <div>
            <Button variant="contained" href="#contained-buttons"  sx={{ color: '#000000', fontWeight: 'bold', backgroundColor: '#F4EC14', borderRadius: '10px', boxShadow: 0, '&:hover': { color: '#000000', backgroundColor: '#F4EC14' }}} style={{textTransform: 'none'}}>
              Online Menu
            </Button>
          </div>
        </Grid>
        {/* <Grid item sm={2} border={1} borderColor="primary.main"></Grid> */}
      </Grid>

      {/* Cards Grid */}
<Grid container spacing={2}  sx={{marginTop: 5}}>
    <Grid item sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}><Typography>Left column</Typography></Grid>
  <Grid item xs={12} sm={8}>
    <Grid container spacing={2}>
      {/* First Card Grid */}
      <Grid item xs={12} sm={4}>
        {/* <Typography>First column</Typography> */}
        <Card sx={{ maxWidth: 345, borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          image={GreekSalad}
          borderRadius="5"
          alt="green iguana"
          sx={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
        />
        <CardContent sx={{backgroundColor: "#edefee"}}>
          <Grid container spacing={2} sx={{ p: 3 }}>
          <Grid xs={12} sm={6}><Typography gutterBottom variant="h6" component="div" sx={{fontWeight: 'bold'}}>Greek Salad</Typography></Grid>
          <Grid xs={12} sm={6}><Typography gutterBottom variant="h6" component="div" color="#ee9b75" sx={{ textAlign: { xs: "left", sm: "right" }, fontWeight: 'bold' }}>$12.99</Typography></Grid>
          <Grid><Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>The famous greed salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</Typography></Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: 3, backgroundColor: "#edefee", display: { xs: "none", sm: "flex" } }}>
        <Button size="small" href="#order-delivery" sx={{ color: '#000000'}} style={{textTransform: 'none', fontWeight: 'bold'}}>
          Order a delivery <DeliveryDiningIcon />
        </Button>
      </CardActions>
    </Card>
      </Grid>

      {/* Second Card Grid */}
      <Grid item xs={12} sm={4}>
        <Typography>Second column</Typography>
      </Grid>

      {/* Third Card Grid */}
      <Grid item xs={12} sm={4}>
        <Typography>Third column</Typography>
      </Grid>
    </Grid>
  </Grid>
  <Grid item sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
    <Typography>Right column</Typography>
  </Grid>
</Grid>

    </Container>    
    </>
  );
}

export default App;