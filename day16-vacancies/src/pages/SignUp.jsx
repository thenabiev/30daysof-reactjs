import React, { useState } from 'react'
import { Container, Form, FormControl } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../state/loginSlice';


const SignUp = () => {
    const [login, setLogin]=useState('')
    const [password, setPassword]=useState('');

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(register({login:login, password:password}));
        navigate('/admin')
    }
    
  return (
    <Container className='py-5 mt-5 section'>
        <h3 className='text-center'>Qeydiyyatdan Keç</h3>

        <Form onSubmit={handleSubmit} style={{maxWidth:"500px"}} className="mx-auto signupForm">
        <label htmlFor="userNameS">İstifadəçi adı</label>
            <FormControl id="userNameS" value={login} onChange={(e)=>setLogin(e.target.value)}/>
        <label htmlFor="passwordS">Şifrə</label>
            <FormControl id="S" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit' className="btn btn-info my-2">Sign Up</button>
        </Form>

    </Container>
  )
}

export default SignUp