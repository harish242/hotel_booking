import React from 'react'
import NavBar from './Navbar'
import {useNavigate} from 'react-router-dom'
import {auth} from '../firebase'
import {useEffect} from 'react'

const LayOut = (props) => {
    // const navigate=useNavigate()
    // useEffect(()=>{
    //     auth.onAuthStateChanged((user)=>{
    //        if(!user){
    //         navigate('/')
    //        }
    //     })
    // },[])
  return (
    <>
    <NavBar/>
    {props.children}
    </>
  )
}

export default LayOut