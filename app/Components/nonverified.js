import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import NonApproved from '../../public/assesst/notapproved.png'
import { Typography } from '@mui/material'
import NonverifiedNav from './NonverifiedNav'

const Nonverified = () => {
  return (
<>

<NonverifiedNav/>
<Box sx={{
    bgcolor:"white",
    height:"91.5vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"Center",
    flexDirection:"column"
}}>

  <Image src={NonApproved} height={300} width={300} style={{filter:" grayscale(80%)"}}/>
  <Typography sx={{color:"#04B36C",fontSize:"20px",fontWeight:"bold",marginTop:"20px"}}>You are not verifeid yet! Contact your Admin for verification</Typography>

</Box>

</>
  )
}

export default Nonverified