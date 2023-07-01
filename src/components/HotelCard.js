// import React from 'react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import {useNavigate} from 'react-router-dom'


export default function HotelCard(props) {
  const hotelDetails=props.hotel
  const navigate=useNavigate()
  
  const HandleClick=()=>{
    // console.log("cardisClicked",hotelDetails)
    
    navigate(`/hotel-details/${hotelDetails.slug}`)
  }
  return (
    
        <Card onClick={HandleClick} sx={{ maxWidth: 300,marginBottom:5,maxHeight:300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={hotelDetails.thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {hotelDetails.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           ${hotelDetails.pricePerNight} night
          </Typography>
        </CardContent>
        <Rating name="read-only" value={Math.floor(hotelDetails.rating)} readOnly />
      </CardActionArea>
    </Card>
    
  )
}
