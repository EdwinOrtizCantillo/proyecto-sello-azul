import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './catalogo.css';


export default class catalogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Row style={{ marginTop: 100 }}>
                <Col lg={4} md={12} className='mb-4 mb-lg-0'>
                    <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Boat on Calm Water'
                    />

                    <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Wintry Mountain Landscape'
                    />
                </Col>

                <Col lg={4} className='mb-4 mb-lg-0'>
                    <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Mountains in the Clouds'
                    />

                    <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
                        className= 'w-100 shadow-1-strong rounded mb-4'
                        alt='Boat on Calm Water'
                    />
                </Col>

                <Col lg={4} className='mb-4 mb-lg-0'>
                    <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Waves at Sea'
                    />

                    <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Yosemite National Park'
                    />
                </Col>
            </Row>
        );
    }
}