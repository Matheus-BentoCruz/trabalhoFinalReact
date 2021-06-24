import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header/";

const Importado = () => (
    <div className="importado">
        <Header />
        <h1>Página principal</h1>
        <Link to={`/detalhes`}>
            <h1>Ir para Página detalhes</h1> 
        </Link> 

    </div>
);

export default Importado;