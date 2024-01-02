import React from 'react'
import Image from "next/image"
import { Box, bgcolor } from "@mui/system"  
import LoginBanner from '@/public/assesst/logoBanner.png'
import Campuslogo from '@/public/assesst/Campus.png'
import { Button, TextField, Typography } from "@mui/material"
import Link from 'next/link'
const ForgotPassword = () => {
  return (
    <Box sx={{
        bgcolor: "white",
        display: "flex",
        height: "100vh"
    }}>
        <Box
            sx={{
                bgcolor: "#04B36C",
                height: "100vh",
                width: "100%",
                borderRadius:"0 100px 0px 0px",
            }}>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            
                height: "100vh"
            }} >
                <Image src={Campuslogo} alt="Logo" />
                <Typography sx={{
                    fontSize: "64px",
                    fontWeight: "Bold"
                }}>Campus App</Typography>
                <Typography

                    sx={{
                        fontStyle: "italic",
                        fontSize: "18px",
                        marginTop: "20px"

                    }}>Where Talent Meets Opportunity!</Typography>
            </Box>

        </Box>

        <Box sx={{

            height: '100vh',
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
            margin: "0px 100px"

        }}>
            <Typography sx={{

                color: "#04B36C",
                fontSize: "40px",
                fontWeight: "bold"
            }}>Forgot Password?</Typography>
             <Typography sx={{

color: "gray",
fontSize: "18px",
margin:"10px 0px"

}}>Get back to your account quickly and easily.</Typography>

            <form action=""
                style={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    gap:"30px"
                }}
            >
                <TextField sx={{
                    width: 1000,
                    marginTop: "20px",
               
                }} variant="outlined" label="Email" />
        
           
             <Button sx={{
                bgcolor:"#04B36C",
                color:"white",
                padding:"8px 12px",
                width:1000,
                marginTop:"30px",
             '&:hover':{
                backgroundColor: "#F1F1F1 ",
                color:"#04B36C"
             }
             }}>Forgot Password</Button>
             <Typography sx={{
                color:"gray",
                textAlign:"center",
                marginTop:"30px"
             }}>Do you remember the password? <span style={{
                color:"#04B36C",
                cursor:"pointer",
                fontWeight:"bold"
             }}><Link href={"/"}>Sign in</Link></span></Typography> 
            </form>



        </Box>



    </Box>
  )
}

export default ForgotPassword