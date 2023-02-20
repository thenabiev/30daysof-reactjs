import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addNewVacancy, removeVacancy } from '../state/workSlice';
import {HiOutlineTrash} from 'react-icons/hi'


const Admin = () => 
{
    const authors=useSelector(state=>state.login.authors)
    const [isLoggedIn , setIsLoggedIn]=useState(false);
    const [password, setPassword]=useState('');
    const [logIn, setLogin]=useState('');
    
    const [authId, setAuthId]=useState('');
    const [currentAdmin, setCurrentAdmin]=useState({})

    const vacancies=useSelector(state=>state.vacancies.vacancies);

    const myAdminDatas=vacancies.filter(x=>x.authId===currentAdmin.id);
    
 

  
  function handleSubmit(e){
      e.preventDefault()

        const adminIndex=authors.findIndex(x=>x.login===logIn);

          if(authors[adminIndex].password==password){
            setIsLoggedIn(true)
            setAuthId(authors[adminIndex].id)
            setCurrentAdmin({...authors[adminIndex]})
            
            
          }else{
            setIsLoggedIn(false);
            setCurrentAdmin({})
            
          }
          setLogin('');
          setPassword('')
    }

    const exit = ()=>{
      setCurrentAdmin({})
      setIsLoggedIn(false);

      setLogin('');
      setPassword('');
      setAuthId('')
    }


    useEffect(()=>{
      if(currentAdmin!=={}){
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
    },[logIn , password])
  
  

//##########################################################################

    const [vacCategory, setVacCategory]=useState('');
    const [city, setCity]=useState('');
    const [company, setCompany]=useState('');
    const [adress, setAdress]=useState('')
    const [position, setPosition]=useState('');
    const [salary, setSalary]=useState('');
    const [mode, setMode]=useState('');
    const [start, setStart]=useState('');
    const [end, setEnd]=useState('');
    const [edu, setEdu]=useState('');
    const [desc, setDesc]=useState('')
    const [descriptions, setDescriptions]=useState([])
    const [req, setReq]=useState('');
    const [requisites, setRequisites]=useState([])



    function clearInputs(){
      setVacCategory('')
      setCity('')
      setCompany('')
      setPosition('')
      setSalary('')
      setMode('')
      setStart('')
      setEnd('')
      setEdu('')
      setDesc('')
      setDescriptions([])
      setReq('')
      setRequisites([])
    }

    const dispatch=useDispatch()
    const handleVacSubmit=(e)=>{
      e.preventDefault();

      
      dispatch(addNewVacancy({
        authId:currentAdmin.id, 
        category:vacCategory,
        city: city,
        company:company,
        adress:adress,
        position:position,
        salary:salary,
        mode:mode,
        endingDate:end,
        education:edu,
        workDetails:{
          workTitle:'',
          workDescriptions:descriptions
        },
        prerequisites:requisites
      }))

      clearInputs()
    }


    const handleDesc=()=>{
      setDescriptions([...descriptions, desc]);
      setDesc('')
    }
    const handleReq=()=>{
      setRequisites([...requisites, req]);
      setReq('')
    }
  return (
    <Container className='py-5 mt-5 section'>
        {
          authId!=='' && (
              <>
              {
                myAdminDatas.length>0 && (
                  <>
                    <h4 className="sectionHeader">Elanlarım</h4>
                <Row xs={1} md={2} className="g-1">
                {authId!=="" && myAdminDatas.map(data=>(
                  <Col key={data.id}>
                    <Card>
                      <Card.Body>
                      <div className='row g-1'>
                        <p className='col-6'>{data.company}</p>
                        <small className="col-6 text-end">ID: {data.id}</small>
                      </div>
                      <p>{data.position}</p>
                      <div className='row'>
                        <p className='col-10'>{data.salary}</p>
                        <div 
                        onClick={()=>dispatch(removeVacancy(data))}
                        className="btn btn-secondary rounded-pill col-2">
                          <HiOutlineTrash />
                        </div>
                      </div>
                      {data.premium==false && <Link to={`/vip/${data.id}`}>Elanı VIP et</Link>}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
                  </>
                )
              }
              

              {
                authId!=='' &&(
                  <div className='my-4'>
                <h4 className='sectionHeader'>Elan Yerləşdir</h4>
                <Form  style={{maxWidth:"500px"}} onSubmit={handleVacSubmit}>

                  <label htmlFor="category">Kateqoriya</label>
                  <FormControl id='category' className='mb-2' value={vacCategory} onChange={(e)=>{setVacCategory(e.target.value)}} />
                  <label htmlFor="city">Şəhər</label>
                  <FormControl id='city' className='mb-2' value={city} onChange={(e)=>{setCity(e.target.value)}} />
                  <label htmlFor="company">Şirkət</label>
                  <FormControl id='company' className='mb-2'  value={company} onChange={(e)=>{setCompany(e.target.value)}} />

                  <label htmlFor="adress">Ünvan</label>
                  <FormControl id='adress' className='mb-2' value={adress} onChange={(e)=>{setAdress(e.target.value)}} />

                  <label htmlFor="position">Pozisiya</label>
                  <FormControl id='position' className='mb-2'  value={position} onChange={(e)=>{setPosition(e.target.value)}} />
                  <label htmlFor="salary">Maaş</label>
                  <FormControl id='salary' className='mb-2'  value={salary} onChange={(e)=>{setSalary(e.target.value)}} />
                  <label htmlFor="mode">İş rejimi</label>
                  <FormControl id='mode' className='mb-2'  value={mode} onChange={(e)=>{setMode(e.target.value)}} />
                  <label htmlFor="start">Elanın başlama tarixi</label>
                  <FormControl id='start' className='mb-2' type='date'  value={start} onChange={(e)=>{setStart(e.target.value)}} />
                  <label htmlFor="end">Elanın bitmə tarixi</label>
                  <FormControl id='end' className='mb-2' type='date'  value={end} onChange={(e)=>{setEnd(e.target.value)}} />
                  <label htmlFor="edu">Təhsil</label>
                  <FormControl className='mb-2' id='edu' value={edu} onChange={(e)=>{setEdu(e.target.value)}} />



                  <label htmlFor="detail">İş haqqında məlumat</label>
                  <InputGroup className='mb-2'>
                    <FormControl  value={desc} id='detail' onChange={(e)=>{setDesc(e.target.value)}} />
                    <div className="btn btn-info" onClick={handleDesc}>+</div>
                  </InputGroup>
                  <label htmlFor="req">Tələblər</label>
                  <InputGroup className='mb-2'>
                    <FormControl value={req} id='req' onChange={(e)=>{setReq(e.target.value)}} />
                    <div className="btn btn-info" onClick={handleReq}>+</div>
                  </InputGroup>
                  <button className="btn btn-info float-end">Add new vac</button>
                </Form>
              </div>
                )
              }
              </>
          )
          
        }
        {
          authId==='' &&(
            (
              <>
                <h3 className='text-center'>Daxil Ol</h3>
              <Form onSubmit={handleSubmit} style={{maxWidth:"500px"}} className="mx-auto loginForm">
                <label htmlFor="userName">İstifadəçi adı</label>
                  <FormControl type='text' id="userName" value={logIn} onChange={e=>setLogin(e.target.value)} required/>
                <label htmlFor="password">Şifrə</label>
                  <FormControl type='text' id="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
  
                  <br />
                  <p>Heasbın yoxdu ? <Link to='/signup'>Qeydiyyatdan keç</Link></p>
                  <button className="btn btn-dark" type='submit'>
                    Log In
                  </button>
              </Form>
              
              </>
            )
          )
        }
        {
          authId!=='' && <button onClick={exit} className="btn btn-danger">Hesabdan çıx</button>
        }
    </Container>
  )
}

export default Admin