import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Image from "../../image/ApiChuckNorris.png"



const Header = () => (
    <div className="header">
        <ul id="header1">
            <div className="chuck">
                <li><img src={Image} alt="foto Da Api do Norris"/></li>
                <h5>Carros </h5>
                <h5>do tio Chuck</h5>
            </div>
               
            <li><input type='subimit' placeholder="pesquisar"/>
            
            </li>

            <li>Carrinho</li>
        </ul>  
        <ul id="header2">
          <Link> <li>Frete Grátis</li> </Link> 
          <Link>  <li>Nacional</li> </Link>
          <Link>  <li>Importados</li> </Link>
        </ul>      
    </div>
);

export default Header;