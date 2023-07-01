import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect,useState} from "react"
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HotelDeatails = () => {
  const [hotelInfo,setHotelInfo]=useState({})
  const param=useParams()
  // console.log(hotelInfo)
  useEffect(()=>{
   (async()=>{
    try{
      const response=await fetch(`https://hotels-api-4ltr.onrender.com/api/hotels/${param.slug}`)
      if(!response.ok){
        throw new Error('Api is wrong')
      }
      const data=await response.json()
      // console.log(data)
      setHotelInfo(data)

    }catch(error){
      console.log(error.message)
    }
   })()
  },[param.slug])
  setTimeout(()=>{
    console.log(hotelInfo)
  },2000)
  return (
    <>
    
    <h1 style={{marginTop:'80px'}} >{hotelInfo.aboutThePlace}</h1>
     <ImageList sx={{ width: '100vw', height: '100vh' }} cols={3} gap={8}>
         {hotelInfo.images?.map(item=>{
      return   (
        <ImageListItem key={item.id}>

        <img
          src={`${item.img}`}
          srcSet={`${item.img}`}
          alt={item.name}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.name}
          subtitle={<span>by: {hotelInfo.address}</span>}
          position="below"
        />
      </ImageListItem>
      )     
        
        
    })}
      </ImageList> </>
   

     
     
  
    
  )
}

export default HotelDeatails