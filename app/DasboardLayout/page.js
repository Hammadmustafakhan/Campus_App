
'use client'
import { Box } from '@mui/system'
import Image from 'next/image'


import ProfileInfo from '../Components/ProfilePic/ProfileInfo';
import Logo from '@/public/assesst/Campus.png'
import { Typography } from '@mui/material'
import { AdminSidenavData as Sidedata } from '../Data/AdminSideNavdata'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import HowToRegSharpIcon from '@mui/icons-material/HowToRegSharp';
import React from 'react'
import { useRouter } from 'next/navigation';


const DasboardLayout = ({ children }) => {
  const Router = useRouter()
  return (
    <>
      <Box sx={{ bgcolor: "white", display: "flex", width: "100%" }}>
        <Box
          sx={{
            width: "400px",
            height: "100vh",
            bgcolor: "#04B36C",
            borderRadius: "0px 100px 0px 0px "
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "felx-start",
              alignItems: "center",
              marginTop: "20px",
              marginLeft: "20px"

            }}
          >

            <Image
              width={80}
              height={80}
              src={Logo}
              alt='Logo'
              style={{
                marginTop: "20px"
              }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "30px",
                color: "white",
                marginTop: "10px"
              }}

            >Campus App</Typography>




          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: "20px", color: "white" }}>
            <ProfileInfo Width={110} Height={110} Color={"white"} />

          </Box>
          <Box
            sx={{
              marginLeft: "35px"

            }}
          >
            {Sidedata.map((elem) => {
              return (
                <Typography

                  onClick={() => Router.push(elem?.path)}
                  sx={{
                    cursor: "pointer",
                    marginTop: "20px",
                    display: "flex",
                    padding: "15px 0px",

                    fontSize: "18px",
                    justifyContent: 'flex-start',
                    transition: "all ease 0.1s",
                    color: "white",
                    gap: "10px",
                    '&:hover': {
                      bgcolor: "white",
                      color: "#04B36C",
                      paddingLeft: "15px",
                      borderRadius: "30px 0px 0px 30px"

                    }
                  }}>
                  {elem.icon}
                  {elem.name}
                </Typography>
              )
            })

            }



          </Box>


        </Box >
        <Box sx={{ height: "100vh", width: "100%" }} >
          {children}
        </Box>
      </Box >
    </>
  )
}

export default DasboardLayout