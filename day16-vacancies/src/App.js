import React, { useState } from 'react';

//Redux

//Router
import {Routes, Route} from 'react-router-dom'
import Details from './pages/Details';
import NavbarComponent from './components/NavbarComponent';
import Vacancies from './pages/Vacancies';
import Admin from './pages/Admin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import VIP from './pages/VIP';
import FooterComponent from './components/FooterComponent';
import Loader from './pages/Loader';


function App() {
    const [loading, setLoading]=useState(true);

  setTimeout(()=>{
    setLoading(false)
  }, 4000)
  return (

    <>
      {
        loading ? <Loader /> 
        : (
          <>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Vacancies />} />
        <Route path='/details/:vacId' element={<Details />}/>
        <Route path='/admin' element={<Admin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/vip/:vacId' element={<VIP />} />
      </Routes>
      <FooterComponent />
    </>
        )
      }
    
    </>
    
  )
}

export default App