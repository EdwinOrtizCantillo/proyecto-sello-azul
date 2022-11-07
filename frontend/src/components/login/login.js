import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './login.css';

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario:'',
            pass:'',
        };
    }
    inciarSesion() {
        alert('Boton de Iniciar sesion');
    }
    
    render() {
        return (
            <Container id="login-container">
                <Row>
                    <Col
                    sm="12" 
                    xs="12"
                    md = {{span:4, offset:4}}
                    lg = {{span:4, offset:4}}
                    xl = {{span:4, offset:4}}>
                        <Row>
                            <h2>Iniciar Sesión</h2>
                        </Row>
                        <Row>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label >Usuario</Form.Label>
                                    <Form.Control onChange={(e) => this.setState({usuario:  e.target.value})}/>
                                    {
                                        this.state.usuario
                                    }
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" onChange={(e) => this.setState({pass:  e.target.value})}/>
                                    {
                                        this.state.pass
                                    }
                                </Form.Group>
                                <Button variant="primary"
                                    onClick={()=>{
                                        this.inciarSesion();
                                    }}>
                                    Iniciar Sesion
                                </Button>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
