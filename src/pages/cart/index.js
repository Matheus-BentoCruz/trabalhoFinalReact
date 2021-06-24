import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header/";


const Carrinho = () => (
    <div className="carrinho">
        <Header />
        <h1>Página Carrinho </h1> 
        <Link to={`/`}>
            <h1>Ir para Página Inicial </h1> 
        </Link>

        <Link to={`/pagamento`}>
            <h1>Ir para Página pagamento </h1> 
        </Link>

    </div>
);

export default Carrinho ;