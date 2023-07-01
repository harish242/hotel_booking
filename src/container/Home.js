import HotelCard from "../components/HotelCard";
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";



const Home = () => {
  const locationDetails=useLocation()
  const [hotel,setHotel]=useState([]);
  useEffect(()=>{
    (async ()=>{
      try{
        const response=await fetch('https://hotels-api-4ltr.onrender.com/api/hotels')
        if(!response.ok){
          throw new Error("Api is failed")
        }
        const data=await response.json()
        setHotel(data)
      }catch(error){
        console.log(error.message)
      }
    })()
},[])

return (

<Container maxWidth="lg" sx={{marginTop:10}}>
  <h1>Welcome {locationDetails?.state?.username}</h1>
<Grid container spacing={2}>
  {hotel.map(hotel=>{
    return(
      <Grid item xs={4}  key={hotel.id}>
        <HotelCard hotel={hotel} />
        </Grid>
    )
  })}
       
      </Grid> 
</Container>
);

};

export default Home;