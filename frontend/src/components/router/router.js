// direcionamiento
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../login/login";
import Inicio from "../index/index";
import PrivateRoute from "../auth/privaterouter";
import Empleados from '../empleados/index';
import Gallos from '../gallos/gallos.buscar';

import Nosotros from "../pages/nosotros";
import Catalogo from "../pages/catalogo";
import Padrotes from "../pages/padrotes";
import Cria from "../pages/cria";
import Contacto from "../pages/contacto";

export default function AppRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/login"]} component={Login} />
                <PrivateRoute exact path={ [ "/empleados" ] } component={ Empleados } />
                <PrivateRoute exact path={ [ "/gallos" ] } component={ Gallos } />
                <Route exact path={ [ "/nosotros" ] } component={ Nosotros } />
                <Route exact path={ [ "/catalogo" ] } component={ Catalogo } />
                <Route exact path={ [ "/padrotes" ] } component={ Padrotes } />
                <Route exact path={ [ "/cria" ] } component={ Cria } />
                <Route exact path={ [ "/contacto" ] } component={ Contacto } />
                <Route exact path={ [ "/index" ] } component={ Inicio } />
                <Route exact path={["/"]} component={Inicio} />
                <Route path={"*"} component={() => (
                    <h1 style={{ marginTop: 300 }}>
                        404
                        <br />
                        Página no encontrada
                    </h1>
                )} />
            </Switch>
        </Router>);}