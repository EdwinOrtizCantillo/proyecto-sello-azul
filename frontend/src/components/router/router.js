// direcionamiento
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../login/login";
import Inicio from "../index/index";
import Nosotros from "../nosotros/nosotros";
import Catalogo from "../catalogo/catalogo";
import Padrotes from "../padrotes/padrotes";
import Cria from "../cria/cria";
import Contacto from "../contacto/contacto";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />}> </Route>
                <Route path="/*" element={(
                    <h1 style={{marginTop: 300}}>
                        404 <br/>Página no encontrada
                    </h1>
                )}> </Route>
                <Route exact path="/index" element={<Inicio />}> </Route>
                <Route exact path="/" element={<Inicio />}> </Route>

                <Route exact path="/nosotros" element={<Nosotros />}> </Route>
                <Route exact path="/" element={<Nosotros />}> </Route>

                <Route exact path="/catalogo" element={<Catalogo />}> </Route>
                <Route exact path="/" element={<Catalogo />}> </Route>

                <Route exact path="/padrotes" element={<Padrotes />}> </Route>
                <Route exact path="/" element={<Padrotes />}> </Route>
                
                <Route exact path="/cria" element={<Cria />}> </Route>
                <Route exact path="/" element={<Cria />}> </Route>

                <Route exact path="/contacto" element={<Contacto />}> </Route>
                <Route exact path="/" element={<Contacto />}> </Route> 
            </Routes>
        </Router>);
}
