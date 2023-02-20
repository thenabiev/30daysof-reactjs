import {BiCrown} from 'react-icons/bi'

import { useSelector } from 'react-redux';

//Bootstrap
import { Card, Col, Container, Row } from 'react-bootstrap';


import React from 'react'
import { Link } from 'react-router-dom';

const Vacancies = () => {

    const vacancyList=useSelector(state=>state.vacancies.vacancies);
    const searchTerm=useSelector(state=>state.vacancies.searchTerm);

    let filteredList=vacancyList.filter(x=>x.position.toLowerCase().includes(searchTerm.toLowerCase())).reverse()

    let vipVacancies=filteredList.filter(x=>x.premium==true)

  return (
    <Container className='my-5 py-5 section'>
        <h4 className="sectionHeader my-3">
            VIP Vakansiyalar
        </h4>
        <Row xs={1} md={2} className='g-4'>
            {vipVacancies.map(vacancy=>(
                <Col key={vacancy.id}>
                <Card className='shadow'>
                    <Card.Body>
                        <div className="row">
                        <div className="col-10">
                            <Card.Title>
                                {vacancy.position}
                            </Card.Title>
                        </div>
                        <div className="col-2">
                            {vacancy.premium && <BiCrown size='1.3em' className='float-end text-warning'/>}
                        </div>
                        </div>
                        <p>{vacancy.company}</p>

                        <div className='row'>
                            <div className="col-8">
                            <p className='text-info'>{vacancy.salary}</p>
                            </div>
                            <div className="col-4">
                                <Link to={`/details/${vacancy.id}`}>
                                <div className="btn btn-info float-end rounded-pill px-4">
                                    Detallar
                                </div>
                                </Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        <br /><br />
        <h4 className="sectionHeader my-3">
            Bütün Vakansiyalar
        </h4>
        <Row xs={1} md={2} className='g-4'>
        {filteredList.length>0 ?
        filteredList.map(vacancy=>
            {if(vacancy.premium==false){
                return(
                    <Col key={vacancy.id}>
                <Card className='shadow'>
                    <Card.Body>
                        <div className="row">
                        <div className="col-10">
                            <Card.Title>
                                {vacancy.position}
                            </Card.Title>
                        </div>
                        <div className="col-2">
                            {vacancy.premium && <BiCrown size='1.3em' className='float-end text-warning'/>}
                        </div>
                        </div>
                        <p>{vacancy.company}</p>

                        <div className='row'>
                            <div className="col-8">
                            {vacancy.salary!==''? <p className='text-info'>{vacancy.salary}</p>
                            : <p className='text-info'>Ə/H Razılaşma İlə</p>
                        }
                            </div>
                            <div className="col-4">
                                <Link to={`/details/${vacancy.id}`}>
                                <div className="btn btn-info float-end rounded-pill px-4">
                                    Detallar
                                </div>
                                </Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
                )
            }}
        ) : 
            <h2 className='text-center w-100 mt-5'>Axtarışınız üzrə uyğunluq tapılmadı</h2>
        
    
    }
        </Row>
        
    </Container>
  )
}

export default Vacancies