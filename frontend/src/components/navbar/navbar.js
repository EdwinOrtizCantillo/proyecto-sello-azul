import React from 'react';
import { Container, Nav, Navbar, DropdownButton, Dropdown, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

export default class menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    render() {
        return (
            <Navbar fixed="top" bg="primary" variant="dark" expand="lg" id="navbar">
                <Container>
                    <Navbar.Brand href={"/index"}>Sello Azul</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href={"/nosotros"}>Nosotros</Nav.Link>
                        <Nav.Link href={"/catalogo"}>Catalogo</Nav.Link>                      
                        <Nav.Link href={"/padrotes"}>Padrotes y Madrinas</Nav.Link>
                        <Nav.Link href={"/cria"}>Pie de Cria</Nav.Link>
                        <Nav.Link href={"/contacto"}>Contato</Nav.Link>
                        </Nav>
                        <DropdownButton id="dropdown-basic-button" title="Usuario">
                            <Dropdown.Header>
                                <Row>
                                    <FontAwesomeIcon icon={faUserSecret} />
                                </Row>
                                <Row>
                                    #USUARIO#
                                </Row>
                            </Dropdown.Header>
                            <Dropdown.Divider />
                            <Dropdown.Item href={"/gallos"}>Gallos</Dropdown.Item>
                            <Dropdown.Item href={"/empleados"}>Empleados</Dropdown.Item>
                            <Dropdown.Item href={"/login"}>Cerrar Sesión</Dropdown.Item>
                            {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
