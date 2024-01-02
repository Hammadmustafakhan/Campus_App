'use client'
import React from 'react'
import DasboardLayout from '../DasboardLayout/page'
import { Typography, Box, TextField } from '@mui/material'
import ProfileInfo from '../Components/ProfilePic/ProfileInfo'

const Page = () => {
    const Role = "admin"
    return (
        <>
            <DasboardLayout>
                <Typography sx={{ fontSize: "40px", fontWeight: "650", marginLeft: "50px", marginTop: "20px", textAlign: "s" }}>
                    {Role === "admin" ? "Admin Profile" : Role === "student" ? "Student Profile" : Role === "company" ? "Company profile" : null}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "60vh" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "25px", width: "50%" }}>
                        <Typography sx={{ fontSize: "40px", color: "#04B36C", fontWeight: "bolder" }}>Edit Profile Info :</Typography>
                        <TextField sx={{ border: "none" }} disabled value={"hammadkhan@gamil.com"} />
                        <TextField variant='outlined' label="Name" />
                        <Typography sx={{ color: "gray" }}>Change Password</Typography>
                        <TextField variant='outlined' label="Old Password" />
                        <TextField variant='outlined' label="New Password" />
                    </Box>
                    <Box>
                        <ProfileInfo Width={300} Height={300} Color={"#04B36C"} />
                    </Box>
                </Box>





            </DasboardLayout >

        </>
    )
}

export default Page