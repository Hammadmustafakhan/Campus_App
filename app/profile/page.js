'use client'
import React from 'react'
import DasboardLayout from '../DasboardLayout/page'
import { Typography, Box, TextField, Button, RadioGroup, MyFormControlLabel } from '@mui/material'
import ProfileInfo from '../Components/ProfilePic/ProfileInfo'

const Page = () => {
    const Radio = () => {

    }
    const Role = "student"
    return (
        <>
            <DasboardLayout>
                <Typography sx={{ fontSize: "40px", fontWeight: "650", marginLeft: "50px", marginTop: "20px", textAlign: "s" }}>
                    {Role === "admin" ? "Admin Profile" : Role === "student" ? "Student Profile" : Role === "company" ? "Company profile" : null}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "75vh" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "25px", width: "50%" }}>
                        <Typography sx={{ fontSize: "40px", color: "#04B36C", fontWeight: "bolder" }}>Edit Profile Info :</Typography>
                        <TextField variant='outlined' label="Name" />
                        <TextField variant='outlined' label="Bio" />
                        {
                        }
                        <Typography sx={{ color: "gray" }}>Change Password</Typography>
                        <TextField variant='outlined' label="Old Password" />
                        <TextField variant='outlined' label="New Password" />
                        <Button sx={{
                            backgroundColor: "#04B36C", color: "white",
                            '&:hover': {
                                backgroundColor: "#F1F1F1 ",
                                color: "#04B36C"
                            }

                        }}>Upadte</Button>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "15px",
                    }}>
                        <ProfileInfo Width={200} Height={200} emailName={"hammad@gamil.com"} />
                    </Box>
                </Box>





            </DasboardLayout >

        </>
    )
}

export default Page