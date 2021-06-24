import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header/";


const Home = () => (
    <div className="home">
        <Header />
        <h1>Pagina Detalhes</h1>
        <Link to={`/`}>
            <h1>Ir para Página inicial</h1> 
        </Link>
        
        <Link to={`/login`}>
            <h1>Ir para login</h1> 
        </Link> 



    </div>
);

export default Home;