import { LocalPizza } from '@mui/icons-material';
import { AppBar, Box, Drawer, IconButton,  Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../styles/headerStyles.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen]=useState(false);

  // Handle Menu Click
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }

  // Menu Drawer
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:"center", paddingLeft:"1em"}}>
          <Typography fontSize={2} color="error"   sx={{flexGrow:1, display:"flex" , alignItems:'center', }}>
          <span style={{fontSize:'36px', fontWeight:"600", color:"#181818"}}>Pizz</span>
            <LocalPizza sx={{fontSize:'36px', transform:"rotate(180deg)"}}/>
          </Typography>
          <ul className='mobile-nav-menu'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/menu'>Menu</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
               
            </ul>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor:"rgba(255,255,255, 0.5)", color:"#181818", backdropFilter:"blur(10px)"}}>
          <Toolbar>
          <span style={{fontSize:'36px', fontWeight:"600"}}>Pizz</span>
          <Typography fontSize={2} color="error" sx={{flexGrow:1}}>
            <LocalPizza sx={{fontSize:'36px', transform:"rotate(180deg)"}}/>
          </Typography>
          <IconButton 
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{display:{xs:"grid", sm:"none"}, placeItems:'center'}} color='inherit'>
            <MenuIcon />
          </IconButton>
          <Box sx={{display:{xs:"none", sm:"block"}}}>
            <ul className='nav-menu'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/menu'>Menu</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
               
            </ul>
          </Box>
          
          </Toolbar>
          
        </AppBar>
        <Box component='nav'>
            <Drawer 
            variant='temporary' 
            sx={{display:{xs:"block", sm:"none"}}}
            open={mobileOpen} 
            onClose={handleDrawerToggle}>
              {drawer}
            </Drawer>
        </Box>
      </Box>
    </>
  )
}

export default Header