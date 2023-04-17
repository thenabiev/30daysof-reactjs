import { Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout>
        <Typography variant='h3' my={3} className='sectionHeader' textAlign={'center'}>About</Typography>
    </Layout>
  )
}

export default About