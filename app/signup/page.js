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
import { SignupSchema } from '../schema/schema'
import { app } from '../Firebase'
import { useFormik } from 'formik'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'
const initialValues = {
  name: "",
  email: "",
  role: "",
  password: "",
  confirm_password: ""
}


const SignUp = () => {
  const [PasswordShow, setPasswordShow] = useState(true)
  const router = useRouter()

  const auth = getAuth(app);
  const { handleBlur, handleChange, errors, values, handleSubmit, touched } = useFormik({
    validationSchema: SignupSchema,
    initialValues: initialValues,
    onSubmit: () => {
      alert("signup successfully")
    }
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
                color: "white",
                marginTop: "20px",

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
          }}>Sign Up</Typography>
          <Typography sx={{

            color: "gray",
            fontSize: "18px",
            margin: "10px 0px"

          }}>Welcome! Create your Account now</Typography>

          <form action="" onSubmit={handleSubmit}
            style={{
              // display:"flex",
              // flexDirection:"column",
              // justifyContent:"center",
              // alignItems:"center",
              // gap:"30px"
            }}
          >
            <TextField value={values.name} onChange={handleChange} onBlur={handleBlur} name='name' sx={{
              width: "100%",
              marginTop: "20px"
            }} variant="outlined" label="Name" />
            {errors.name && touched.name ? <Typography sx={{ color: "red" }}>{errors.name}</Typography> : null}

            <TextField value={values.email} onChange={handleChange} onBlur={handleBlur} name='email' sx={{
              width: "100%",
              marginTop: "20px"
            }} variant="outlined" label="Email" />

            {errors.email && touched.email ? <Typography sx={{ color: "red" }}>{errors.email}</Typography> : null}
            <FormControl sx={{
              minWidth: 1000,
              marginTop: "20px "
            }}>
              <InputLabel id="demo-simple-select-autowidth-label">Select Role</InputLabel>
              <Select
                sx={{
                  width: 1020
                }}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={values.role}
                onChange={handleChange}
                autoWidth
                name='role'
                label="Select Role"
              >
                <MenuItem sx={{ width: 1000 }} value={"Candidate"}>Candidate</MenuItem>
                <MenuItem sx={{ width: 1000 }} value={"company"}>company</MenuItem>
              </Select>
            </FormControl>
            {errors.role && touched.role ? <Typography sx={{ color: "red" }}>{errors.role}</Typography> : null}






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
            <TextField value={values.confirm_password} onChange={handleChange} name='confirm_password' InputProps={{
              endAdornment: (
                <EndAdorment />
              )


            }} sx={{
              width: "100%",
              marginTop: "20px",
              borderColor: "#04B36C"
            }} variant="outlined" label="Confrim Password"
              type={PasswordShow ? 'password' : 'text'}

            />
            {errors.confirm_password && touched.confirm_password ? <Typography sx={{ color: "red" }}>{errors.confirm_password}</Typography> : null}


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
            }}>Already have an account?<span style={{
              color: "#04B36C",
              cursor: "pointer",
              fontWeight: "bold"
            }}><Link href={"/"}>Sign in</Link></span></Typography>
          </form>
        </Box>



      </Box>
    </>
  )
}

export default SignUp