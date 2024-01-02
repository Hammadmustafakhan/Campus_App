import React from 'react'
import { Box } from '@mui/system'
import Image from 'next/image'
import { Typography } from '@mui/material'
const DashBoardCard = ({ headText, userAmount, ImgSrc }) => {
    return (
        <Box sx={{ bgcolor: "#04B36C", width: "700px", height: "300px", borderRadius: "15px", }}>
            <Box sx={{ display: "flex", alignItems: "center", height: "300px", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "300px", }}>
                    <Typography sx={{ fontSize: "40px", color: "white", padding: "15px 20px", fontWeight: "600" }}>{headText}</Typography>
                    <Typography sx={{ fontSize: "40px", color: "white", padding: "15px 20px", fontWeight: "600" }}>{userAmount}</Typography>
                </Box>
                <Image width={150} height={150} src={ImgSrc} style={{ marginRight: "30px" }} />
            </Box>
        </Box>
    )
}

export default DashBoardCard