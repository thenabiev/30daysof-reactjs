import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const Home = () => {
  return (
    <Layout>
     <div className="home">
      <div className="headerContainer">
        <Typography variant='h2' sx={{color:'#f4f4f4', textShadow:"5px 5px 5px #111"}}>PizzAura</Typography>
        <Typography variant='h5' sx={{color:'#f4f4f4', textShadow:"5px 5px 5px #111"}}>World is round, <br /> but it may be triangle sometimes)</Typography>
        <Stack direction={'row'} gap={1} my={2}>
          <Link to='/contact' >
            <Button color='error' variant='outlined' className='hero-contact' sx={{bgcolor:"#f4f4f4",}}>Contact</Button>
          </Link>
          <Link to='/menu'>
            <Button variant='contained' color='error'>Order now</Button>
          </Link>
        </Stack>
      </div>
     </div>
    </Layout>
  )
}

export default Home