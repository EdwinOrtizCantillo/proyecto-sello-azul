import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { request } from '../helper/helper';
import DataGrid from '../grid/grid';

const columns = [
    {
        dataField: "_id",
        text: "ID",
        hidden: true,
    },    
    {
        dataField: "placa",
        text: " Placa",
    },
    {
        dataField: "pluma",
        text: "Pluma",
    },
    {
        dataField: "nombre",
        text: "Nombre",
    },
    {
        dataField: "nombre_p",
        text: "Nombre padre",
    },
    {
        dataField: "nombre_m",
        text: "nombre de la madre",
    },
    {
        dataField: "edad",
        text: " Edad",
    },
    {
        dataField: "tipo",
        text: "Tipo",
    },
];


export default class GallosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        request
            .get(this.props.url)
            .then((response) => {
                this.setState({ rows: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <Container id="gallos-buscar-container">
                <Row>
                    <h1>Buscar Gallos</h1>
                </Row>
                <Row>
                <DataGrid url="/gallos" columns={ columns }/>
                </Row>
            </Container>
        );
    }
}