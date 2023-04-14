import { LocalPizza } from '@mui/icons-material';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/headerStyles.css';

const Header = () => {
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor:"rgba(255,255,255, 0.5)", color:"#181818", backdropFilter:"blur(10px)"}}>
          <Toolbar>
          <span style={{fontSize:'36px', fontWeight:"600"}}>Pizz</span>
          <Typography fontSize={2} color="error" sx={{flexGrow:1}}>
            <LocalPizza sx={{fontSize:'36px', transform:"rotate(180deg)"}}/>
          </Typography>
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
      </Box>
    </>
  )
}

export default Header