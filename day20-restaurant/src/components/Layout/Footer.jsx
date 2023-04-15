import { GitHub, Instagram, Twitter } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{
        bgcolor:"#181818",
        color:"#f4f4f4",
        padding:"2rem",
        textAlign:'center'
    }}>
        <Box>
            <Stack direction={'row'} justifyContent="center" gap={1} mb={3}>
                <a href="#" style={{color:"#f4f4f4"}}>
                <Instagram />
                </a>
                <a href="#" style={{color:"#f4f4f4"}}>
                <Twitter />
                </a>
                <a href="#" style={{color:"#f4f4f4"}}>
                <GitHub />
                </a>
            </Stack>
        </Box>
        <Typography variant='p' >
            All rights reserved &copy; thenabiev
        </Typography>
    </Box>
  )
}

export default Footer