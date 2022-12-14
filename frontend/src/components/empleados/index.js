import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import EmpleadosBuscar from './crud/buscar';
import EmpleadosCrear from './crud/crear';
import "./empleados.css";

export default class Empleados extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "buscar"
        };
    }

    changeTab(tab) {
        this.setState({ currentTab: tab });
    }
    render() {
        return <Container id="empleados-container">
            <Row>
                <Nav 
                fill 
                variant="tabs" 
                defaultActiveKey="buscar"
                    onSelect={(eventkey) => 
                    this.setState({ currentTab: eventkey})}
                    >
                    <Nav.Item>                        
                        <Nav.Link eventKey="buscar">Buscar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="crear">Crear</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
            <Row>
                {this.state.currentTab === "buscar" ?(
                    <EmpleadosBuscar />
                ) : (
                    <EmpleadosCrear changeTab={(tab) => this.changeTab(tab)} />
                    )}
            </Row>
        </Container>;
    }
}
