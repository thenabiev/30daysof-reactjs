import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputGroup from 'react-bootstrap/InputGroup';
import { setSearchTerm } from '../state/workSlice';

//Router
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function NavbarComponent() {

  const dispatch=useDispatch();
  const [term, setTerm]=useState('');
  const navigate=useNavigate()

  const handleSearch=(e)=>{
    e.preventDefault();
    dispatch(setSearchTerm(term))
    setTerm('');
    navigate('/')
  }
  return (
    <>
      {['md'].map((expand) => (
        <Navbar collapseOnSelect key={expand} bg="white" expand={expand} className="mb-5 shadow-sm" fixed='top'>
          <Container >
            <Navbar.Brand
            onClick={()=>dispatch(setSearchTerm(''))}
             href="#">
              <h4><span className='text-info'>İş</span>Vara</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <h4><span className='text-info'>İş</span>Vara</h4>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link to='/' as={Link} href="/" >Əsas səhifə</Nav.Link>
                  <Nav.Link to="/admin" as={Link} href="/admin" >Admin</Nav.Link>
                  <Nav.Link to="/about" as={Link} href="/about" >Haqqımızda</Nav.Link>
                  
                </Nav>
                <Form 
                onSubmit={handleSearch}
                className="d-flex">
                  <InputGroup>
                  <Form.Control
                    onChange={(e)=>setTerm(e.target.value)}
                    value={term}
                    type="search"
                    placeholder="Elan axtar..."
                    aria-label="Search"
                  />
                  <Button 
                  type='submit'
                  variant="outline-info">Axtar</Button>
                  </InputGroup>
                </Form>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;