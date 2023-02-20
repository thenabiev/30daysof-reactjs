import React from 'react'
import { Col, Row } from 'react-bootstrap';
import {FaFacebookF, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'

const FooterComponent = () => {
  return (
    <div className="container-fluid bg-dark text-light py-5 footer">
        <div className="container">
            <Row xs={2} md={4}>
                <Col>
                    <h5>Links</h5>
                    <ul>
                        <li><a href="#">Footer Link</a></li>
                        <li><a href="#">Footer Link</a></li>
                        <li><a href="#">Footer Link</a></li>
                        <li><a href="#">Footer Link</a></li>
                    </ul>
                </Col>
                <Col>
                    <h5>Links</h5>
                    <ul>
                        <li><a href="#">Footer Link</a></li>
                        <li><a href="#">Footer Link</a></li>
                        <li><a href="#">Footer Link</a></li>
                        <li><a href="#">Footer Link</a></li>
                    </ul>
                </Col>
                <Col>
                    <h5>Links</h5>
                    <ul>
                        <li><a href="#">Footer Link</a></li>
                        <li><a href="#">Footer Link</a></li>
                        <li><a href="#">Footer Link</a></li>
                        <li><a href="#">Footer Link</a></li>
                    </ul>
                </Col>
                <Col>
                    <h5>Links</h5>
                    <div className="d-flex">
                        <a href="#" className="col-1 me-2">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="col-1 me-2">
                            <FaTwitter />
                        </a>
                        <a href="#" className="col-1 me-2">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="col-1 me-2">
                            <FaYoutube />
                        </a>
                    </div>
                    <br />
                    <p>Made by <a className='text-info' href="https://github.com/thenabiev" target='_blank'>webdevnabiev</a></p>
                </Col>

            </Row>
        </div>
    </div>
  )
}

export default FooterComponent