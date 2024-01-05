import { Box, width } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import ProfilePicture from '../../../public/assesst/profile.jpg'
import { Typography } from '@mui/material'
const ProfileInfo = ({ Width, Height, emailName }) => {
    return (
        <>
            <Box sx={{

                bgcolor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100px",

            }}>
                <Image
                    style={{
                        borderRadius: "500px",
                        border: "3px solid yellow"
                    }}
                    width={Width}
                    height={Height}
                    src={ProfilePicture}
                />

            </Box>


            <Typography sx={{ fontSize: "20px", }}>Hammad Khan</Typography>
            <Typography sx={{ fontSize: "18px", color: "gray" }}>{emailName}</Typography>
        </>
    )
}

export default ProfileInfo


