import { Box, width } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import ProfilePicture from '../../../public/assesst/profile.jpg'
import { Typography } from '@mui/material'
const ProfileInfo = ({ Width, Height, Color }) => {
    return (
        <>
            <Box sx={{
                width: "120px",
                height: "120px",
                bgcolor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100px",

            }}>
                <Image
                    style={{
                        borderRadius: "500px"
                    }}
                    width={Width}
                    height={Height}
                    src={ProfilePicture}
                />

            </Box>


            <Typography sx={{ fontSize: "20px", }}>Hammad Khan</Typography>
        </>
    )
}

export default ProfileInfo
