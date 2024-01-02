import React from 'react'
import DasboardLayout from '../DasboardLayout/page';
import DashBoardCard from '../Components/DashBoardCard';
import { Typography } from '@mui/material';
import Candidates from '../../public/assesst/Candidates.png'
import Office from '../../public/assesst/office.png'


import { Box } from '@mui/system';
const page = () => {
    return (

        <DasboardLayout>
            <Typography sx={{ fontSize: "40px", fontWeight: "650", marginLeft: "50px", marginTop: "20px" }}>
                Admin Dasboard
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: "40px", marginTop: "30px" }}>
                <DashBoardCard headText={"Total Companies"} userAmount={"500"} ImgSrc={Office} />
                <DashBoardCard headText={"Total Candidates"} userAmount={"689"} ImgSrc={Candidates} />
            </Box>


        </DasboardLayout>

    )
}

export default page