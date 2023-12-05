import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GreekSalad from '../icons_assets/greeksalad.jpg';
import Bruchetta from '../icons_assets/bruchetta.svg';
import LemonDessert from '../icons_assets/lemondessert.jpg';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

function Highlights() {
  return (
    <>
    <Container maxWidth="xl" sx= { { backgroundColor: "white", mb:5 }}>
      <Grid container spacing={2} sx={{marginTop: 10}}>
        <Grid item sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
        <Grid item xs={12} sm={5}>
          <div>
            <Typography variant="h6" sx={{fontSize: {xs:25 , sm:30 }, color: '#000000',fontWeight: 'bold'}}>
              This weeks specials!
            </Typography>
          </div>
          <br></br>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div>
            <Button variant="contained" href="#contained-buttons"  sx={{ color: '#000000', fontWeight: 'bold', backgroundColor: '#F4EC14', borderRadius: '10px', boxShadow: 0, '&:hover': { color: '#000000', backgroundColor: '#F4EC14' }}} style={{textTransform: 'none'}}>
              Online Menu
            </Button>
          </div>
        </Grid>
      </Grid>

      {/* Cards Grid */}
<Grid container spacing={2}  sx={{marginTop: 5}}>
    <Grid item sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      {/* <Typography>Left column</Typography> */}
    </Grid>
  <Grid item xs={12} sm={8}>
    <Grid container spacing={2}>
      {/* First Card Grid */}
      <Grid item xs={12} sm={4}>
        {/* <Typography>First column</Typography> */}
        <Card sx={{ maxWidth: 345, borderRadius: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          image={GreekSalad}
          borderRadius="5"
          alt="green iguana"
          sx={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px", display: { xs: 'none', sm: 'block' } }}
        />
        <CardContent sx={{backgroundColor: "#edefee"}}>
          <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid xs={8} sm={6}><Typography gutterBottom variant="h6" component="div" sx={{fontWeight: 'bold'}}>Greek Salad</Typography></Grid>
          <Grid sm={6}><Typography gutterBottom variant="h6" component="div" color="#ee9b75" sx={{ display: { xs: "none", sm: "flex" }, flexDirection: { sm: "row-reverse" }, fontWeight: 'bold' }}>$12.99</Typography></Grid>
          <Grid sm={12}><Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 0, sm: 3 }, display: { xs: 'none', sm: 'block' } }}>The famous greed salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</Typography></Grid>
          <Grid xs={8} sx={{display: {xs: 'block', sm: 'none'}}}><Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 0, sm: 3 }, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>The famous greed salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</Typography><Typography gutterBottom variant="h6" component="div" color="text.secondary" sx={{ mt: {xs: 0}, display: { xs: "flex", sm: "none" }, flexDirection: { xs: "row" }, fontWeight: 'bold' }}>$12.99</Typography></Grid>
          <Grid xs={4} sx={{ display: { xs: "flex", sm: "none" } }}><img src={GreekSalad} alt="Greek Salad" style={{ borderRadius: 5 }} height={80} /></Grid>
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
        {/* <Typography>Second column</Typography> */}
        <Card sx={{ maxWidth: 345, borderRadius: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          image={Bruchetta}
          borderRadius="5"
          alt="bruchetta"
          sx={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px", display: { xs: 'none', sm: 'block' } }}
        />
        <CardContent sx={{backgroundColor: "#edefee"}}>
          <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid xs={8} sm={6}><Typography gutterBottom variant="h6" component="div" sx={{fontWeight: 'bold'}}>Greek Salad</Typography></Grid>
          <Grid sm={6}><Typography gutterBottom variant="h6" component="div" color="#ee9b75" sx={{ display: { xs: "none", sm: "flex" }, flexDirection: { sm: "row-reverse" }, fontWeight: 'bold' }}>$12.99</Typography></Grid>
          <Grid sm={12}><Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 0, sm: 3 }, display: { xs: 'none', sm: 'block' } }}>The famous greed salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</Typography></Grid>
          <Grid xs={8} sx={{display: {xs: 'block', sm: 'none'}}}><Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 0, sm: 3 }, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>The famous greed salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</Typography><Typography gutterBottom variant="h6" component="div" color="text.secondary" sx={{ mt: {xs: 0}, display: { xs: "flex", sm: "none" }, flexDirection: { xs: "row" }, fontWeight: 'bold' }}>$12.99</Typography></Grid>
          <Grid xs={4} sx={{ display: { xs: "flex", sm: "none" } }}><img src={Bruchetta} alt="Greek Salad" style={{ borderRadius: 5 }} height={80} /></Grid>
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

      {/* Third Card Grid */}
      <Grid item xs={12} sm={4}>
        {/* <Typography>Third column</Typography> */}
        <Card sx={{ maxWidth: 345, borderRadius: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="230"
          image={LemonDessert}
          borderRadius="5"
          alt="lemondessert"
          sx={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px", display: { xs: 'none', sm: 'block' } }}
        />
        <CardContent sx={{backgroundColor: "#edefee"}}>
          <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid xs={8} sm={6}><Typography gutterBottom variant="h6" component="div" sx={{fontWeight: 'bold'}}>Greek Salad</Typography></Grid>
          <Grid sm={6}><Typography gutterBottom variant="h6" component="div" color="#ee9b75" sx={{ display: { xs: "none", sm: "flex" }, flexDirection: { sm: "row-reverse" }, fontWeight: 'bold' }}>$12.99</Typography></Grid>
          <Grid sm={12}><Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 0, sm: 3 }, display: { xs: 'none', sm: 'block' } }}>The famous greed salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</Typography></Grid>
          <Grid xs={8} sx={{display: {xs: 'block', sm: 'none'}}}><Typography variant="body2" color="text.secondary" sx={{ mt: { xs: 0, sm: 3 }, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>The famous greed salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</Typography><Typography gutterBottom variant="h6" component="div" color="text.secondary" sx={{ mt: {xs: 0}, display: { xs: "flex", sm: "none" }, flexDirection: { xs: "row" }, fontWeight: 'bold' }}>$12.99</Typography></Grid>
          <Grid xs={4} sx={{ display: { xs: "flex", sm: "none" } }}><img src={LemonDessert} alt="Greek Salad" style={{ borderRadius: 5 }} height={80} /></Grid>
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
    </Grid>
  </Grid>
  <Grid item sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
    {/* <Typography>Right column</Typography> */}
  </Grid>
</Grid>

    </Container>    
    </>
  );
}

export default Highlights;