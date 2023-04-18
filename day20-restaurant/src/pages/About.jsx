import { Typography, Box, Stack, Grid, Button } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout';
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <Layout>
        <Typography variant='h3' my={3} className='sectionHeader' textAlign={'center'}>About</Typography>
        <Grid container spacing={2} px={3} maxWidth={'100vw'} overflow={'hidden'}>
          <Grid item xs={12} md={6}>
            <Typography variant='h5'>Lorem</Typography>
            <br />
            <Typography variant='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus est quaerat sit iusto aperiam alias ea! Repellendus, labore! Labore quos, consequuntur sed iure earum officia quo quidem deserunt illum doloribus dolorem. Officiis dicta neque eveniet. Est cumque alias deleniti!</Typography>
            <br />
            <br />
            <Typography variant='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus est quaerat sit iusto aperiam alias ea! Repellendus, labore! Labore quos, consequuntur sed iure earum officia quo quidem deserunt illum doloribus dolorem. Officiis dicta neque eveniet. Est cumque alias deleniti!</Typography>
            <br />
            <br />
            <Typography variant='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus est quaerat sit iusto aperiam alias ea! Repellendus, labore! Labore quos, consequuntur sed iure earum officia quo quidem deserunt illum doloribus dolorem. Officiis dicta neque eveniet. Est cumque alias deleniti!</Typography>
            <Box my={2}>
            <Button variant='contained' color='error' >Button</Button>

            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img 
            style={{maxWidth:'100%', borderRadius:'10px'}}
            src={aboutImg}/>
          </Grid>
        </Grid>
    </Layout>
  )
}

export default About