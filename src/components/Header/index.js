import React from "react";
import "./index.css";



// Construindo um componente em formato de função
// É chamado de Statelles
const Header = () => (
    <div className="header">
        <ul id="header1">
            <li>Logo</li>
            <li><input type='text' placeholder="pesquisar"/></li>
            <li>Carrinho</li>
        </ul>  
        <ul id="header2">
            <li>Frete Grátis</li>
            <li>Nacional</li>
            <li>Importados</li>
        </ul>      
    </div>
);

export default Header;