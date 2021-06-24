import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header/";


const Pagamento = () => (
    <div className="pagamento">
        <Header />
        <h1>Aqui é a pagina de pagamento </h1> 
        <Link to={`/`}>
            <h1>Ir para Página Inicial </h1> 
        </Link>

        <Link to={`/carrinho`}>
            <h1>Ir para Página Carrinho </h1> 
        </Link>

    </div>
);

export default Pagamento ;