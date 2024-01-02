
'use client'
import React from 'react'
import { Box, bgcolor } from "@mui/system"
import Image from "next/image"
import Campuslogo from '@/public/assesst/Campus.png'
import { Button, IconButton, InputAdornment, Menu, MenuItem, TextField, Typography, FormControl, InputLabel, Select } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Studentdetails from '../studentDetails/studentdetails'
import { useState } from "react"
import Link from 'next/link'
import { LoginSchema } from '../schema/schema'
import { app } from '../Firebase'
import { useFormik } from 'formik'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'

const initialValues = {

  email: "",
  password: "",

}


const LogIn = () => {
  const [PasswordShow, setPasswordShow] = useState(true)
  const router = useRouter()

  const auth = getAuth(app);
  const { handleBlur, handleChange, errors, values, handleSubmit, touched } = useFormik({
    validationSchema: LoginSchema,
    initialValues: initialValues,
    onSubmit: () => { }
  })

  const EndAdorment = () => {
    return (

      <InputAdornment position="end">
        <IconButton onClick={() => setPasswordShow(!PasswordShow)}>
          {!PasswordShow ?
            <VisibilityIcon /> : <VisibilityOffIcon />
          }

        </IconButton>
      </InputAdornment>
    )

  }





  return (
    <>
      <Box sx={{
        bgcolor: "white",
        display: "flex",
        height: "100vh"
      }}>
        <Box
          sx={{
            bgcolor: "#04B36C",
            height: "100vh",
            width: "40%",
            borderRadius: "0 100px 0px 0px",
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
              fontWeight: "Bold",
              color: "white"
            }}>Campus App</Typography>
            <Typography

              sx={{
                fontStyle: "italic",
                fontSize: "18px",
                marginTop: "20px", color: "white"

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
          <Toaster richColors position='top-right' />
          <Typography sx={{

            color: "#04B36C",
            fontSize: "40px",
            fontWeight: "bold"
          }}>Sign In </Typography>
          <Typography sx={{

            color: "gray",
            fontSize: "18px",
            margin: "10px 0px"

          }}>Welcome Back ! Log In to your Account</Typography>

          <form action="" onSubmit={handleSubmit}
            style={{
              // display:"flex",
              // flexDirection:"column",
              // justifyContent:"center",
              // alignItems:"center",
              // gap:"30px"
              width: "100%"
            }}
          >


            <TextField value={values.email} onChange={handleChange} onBlur={handleBlur} name='email' sx={{
              width: "100%",
              marginTop: "20px"
            }} variant="outlined" label="Email" />

            {errors.email && touched.email ? <Typography sx={{ color: "red" }}>{errors.email}</Typography> : null}






            <TextField value={values.password} onChange={handleChange} onBlur={handleBlur} name='password' InputProps={{
              endAdornment: (
                <EndAdorment />
              )


            }} sx={{
              width: "100%",
              marginTop: "20px",
              borderColor: "#04B36C"
            }} variant="outlined" label="Password"
              type={PasswordShow ? 'password' : 'text'}

            />
            {errors.password && touched.password ? <Typography sx={{ color: "red" }}>{errors.password}</Typography> : null}


            <Button type='submit' sx={{
              bgcolor: "#04B36C",
              color: "white",
              padding: "8px 12px",
              width: "100%",
              marginTop: "30px",
              '&:hover': {
                backgroundColor: "#F1F1F1 ",
                color: "#04B36C"
              }
            }}>Sign Up</Button>
            <Typography sx={{
              color: "gray",
              textAlign: "center",
              marginTop: "30px"
            }}>Don't have an account?<span style={{
              color: "#04B36C",
              cursor: "pointer",
              fontWeight: "bold"
            }}><Link href={"/signup"}> Sign up</Link></span></Typography>
          </form>
        </Box>



      </Box>
    </>
  )
}

export default LogIn