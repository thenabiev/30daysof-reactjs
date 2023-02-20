import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { BiCrown } from 'react-icons/bi';
import {TiTick} from 'react-icons/ti';
import {AiOutlineEye} from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



const Details = () => {

    const {vacId}=useParams();

    const vacancies=useSelector(state=>state.vacancies.vacancies);
    const vacancy=vacancies.find(x=>x.id==vacId);
    
    
    
  return (
    <Container className='py-5 mt-5 section'>
        <h3>{vacancy.position} Elanı {vacancy.premium && (
              <BiCrown  className='text-warning' size='.7em'/>   
            )}
        </h3>
        <p className='text-secondary'>{vacancy.company}</p>
        <h5 className='text-info'>{vacancy.salary==="Ə/H razılaşma ilə"?vacancy.salary : vacancy.salary + " AZN" }</h5>
        <Row xs={1} md={2} className='g-2 py-3 mt-5 '>
          <Col>
            <p>Şəhər : <span className='text-info'>{vacancy.city}</span></p>
            <p>Kateqoriya : <span className='text-info'>{vacancy.category}</span></p>
            <p>Təhsil : <span className='text-info'>{vacancy.education}</span></p>
            <p>Elanın başlama tarixi : <span className='text-info'>{vacancy.startingDate}</span></p>
            <p>Elanın bitmə tarixi : <span className='text-info'>{vacancy.endingDate}</span></p>
            <p>E-poçt : <span className='text-info'>{vacancy.eMail}</span></p>
          </Col>
          <Col>
            {vacancy.adress !=='' && (
              <p>Ünvan : <span className='text-info'>{vacancy.adress}</span></p>
            )}
            <p>İş rejimi : <span className='text-info'>{vacancy.mode}</span></p>
            <p>İş təcrübəsi : <span className='text-info'>{vacancy.expirence}</span></p>
            {vacancy.gender !=='' && (
              <p>Cins : <span className='text-info'>{vacancy.gender}</span></p>
            )}
            
          </Col>

        </Row>

        <p className='mb-5'><AiOutlineEye /> {vacancy.views}</p>
        <>
        <h4 className="sectionHeader mt-3 mb-5">
          İş Barədə Məlumat
        </h4>
        {
          vacancy.workDetails.workTitle!=='' && (
            <p>
             {vacancy.workDetails.workTitle}
            </p>
            
          )
        }
        <br />
        {
              vacancy.workDetails.workDescriptions.map((desc, idx)=>(
                <p key={idx}><TiTick className='text-success'/>  {desc}</p>
              ))
            }
            <br />
            {
              vacancy.prerequisites.length>0 &&
              <h4 className="sectionHeader mt-3 mb-5">
              Namizəd Üçün Tələblər
              </h4>
            }
        {
          vacancy.prerequisites.map((req, idx)=>(
            <p key={idx}><TiTick className='text-success'/>  {req}</p>
          ))
        }
        </>
    </Container>
  )
}

export default Details