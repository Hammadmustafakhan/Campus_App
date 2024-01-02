"use client"
import { Box } from '@mui/system'
import React from 'react'
import logo from '../../public/assesst/Campus.png'
import Image from 'next/image'
import { Button, Typography } from '@mui/material'
import { GrLogout } from "react-icons/gr";
const NonverifiedNav = () => {
  return (
    <>
     <Box sx={{
        bgcolor:"#04B36C",
        height:"78px",
        width:"100%",
        display:"flex",
        justifyContent:"space-between"
     }}>
<Box sx={{display:"flex", alignItems:"center",marginLeft:"10px"}}>
<Image src={logo} height={70} width={70}/>
<Typography sx={{fontWeight:"bold",fontSize:"25px"}}>CampusApp</Typography>

</Box>


<Button sx={{color:"white",marginRight:"25px",fontSize:"15px",fontWeight:"bold",
        display:"flex", gap:"10px"}}>
    Log out 
    <GrLogout  />
</Button>


     </Box>
    
    
    
    
    </>
  )
}

export default NonverifiedNav