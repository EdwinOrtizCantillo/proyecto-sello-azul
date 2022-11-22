import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from 'react-bootstrap/ModalFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default class footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Footer bgcolor='primary' className='text-center text-lg-start text-muted'>
                <section className=''>
                    <Container className='text-md-start mt-5'>
                        <div className="col-lg-12 d-flex">
                            <Row className='mt-3'>
                                <Col md="4" lg="4" xl="3" className='mx-auto'>
                                    <h6 className='text-uppercase fw-bold'>
                                        Company name
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                    </p>
                                </Col>

                                <Col md="2" lg="2" xl="2" className='mx-auto'>
                                    <h6 className='text-uppercase fw-bold '>Products</h6>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Angular
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            React
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Vue
                                        </a>
                                    </p>
                                    <p>
                                        <a href='#!' className='text-reset'>
                                            Laravel
                                        </a>
                                    </p>
                                </Col>

                                <Col md="3" lg="2" xl="2" className='mx-auto '>
                                <h6 className='text-uppercase fw-bold '>Nuestras redes</h6>
                                    <p>
                                        <a href='https://www.google.com/' className='me-4 text-reset'>
                                            <FontAwesomeIcon icon={faFacebook} />  facebook
                                        </a>
                                    </p>
                                    <p>
                                        <a href='https://www.google.com/' className='me-4 text-reset'>
                                            <FontAwesomeIcon icon={faTwitter} />  twitter
                                        </a>
                                    </p>
                                    <p>
                                        <a href='https://www.google.com/' className='me-4 text-reset'>
                                            <FontAwesomeIcon icon={faInstagram} />  instagram
                                        </a>
                                    </p>
                                    <p>
                                        <a href='https://www.google.com/' className='me-4 text-reset'>
                                            <FontAwesomeIcon icon={faLinkedin} />  linkedin
                                        </a>
                                    </p>
                                </Col>

                                <Col md="3" lg="3" xl="3" className='mx-auto mb-md-0 '>
                                    <h6 className='fw-bold '>Contact</h6>
                                    <p>
                                        New York, NY 10012, US
                                    </p>
                                    <p>
                                        info@example.com
                                    </p>
                                    <p>
                                        + 01 234 567 88
                                    </p>
                                    <p>
                                        + 01 234 567 89
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className="col-lg-12 d-flex">
                        <div className='mx-auto align-setf-center p-2' style={{ backgroundColor: 'rgb: green'}}>
                            © 2022 Copyright:
                            <a className='text-reset fw-bold' href='https://www.google.com'>
                                Edwin Ortiz
                            </a>
                        </div>
                    </div>
                </section>
            </Footer>
        );
    }
}