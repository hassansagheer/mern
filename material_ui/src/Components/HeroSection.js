import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import restauranfood from '../icons_assets/restauranfood.jpg';

function HeroSection() {
    return(
    <Container maxWidth="xl" sx= { { backgroundColor: '#495E57' }}>
      <Grid container spacing={2} sx={{marginTop: 0}}>
        <Grid item sm={2} border={1} borderColor="primary.main"  sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
        <Grid item xs={8} sm={4} border={1} borderColor="primary.main">
          <div>
            <Typography variant="h6" fontSize={40} sx={{fontSize: {xs:30 , sm:40 }, color: '#F4EC14', fontWeight: 'bold'}}>
              Little Lemon
            </Typography>
            <Typography variant="h2" sx={{fontSize: {xs:20 , sm:30 }, color: '#EDEFEE', fontWeight: 'bold'}}>
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
            <Button variant="contained" href="#contained-buttons"  sx={{ color: '#000000', fontWeight: 'bold', backgroundColor: '#F4EC14', borderRadius: '10px', boxShadow: 0, '&:hover': { color: '#000000', backgroundColor: '#F4EC14' }}} style={{textTransform: 'none'}}>
              Reserve a Table
            </Button>
          </div>
          <br></br>
        </Grid>
        <Grid item sm={1} border={1} borderColor="primary.main"  sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
        <Grid item xs={4} sm={3} border={1} borderColor="primary.main">
        <Card sx={{ borderRadius: '10px', marginTop: {xs: 25, sm: 0} }}>
          <CardMedia
          component="img"
          // height="250"
          image={restauranfood}
          alt="restauranfood"
          sx={{ height: { xs: 'auto', sm: 250 }, width: '100%', objectFit: 'cover' }}
          />
        </Card>
        </Grid>
        <Grid item sm={2} border={1} borderColor="primary.main"  sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
      </Grid>
    </Container>
    );
}
export default HeroSection;