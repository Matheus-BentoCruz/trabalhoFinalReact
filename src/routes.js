import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Home from "./pages/home";
import Detalhes from "./pages/detalhes";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Carrinho from "./pages/cart";
import Pagamento from "./pages/pagamento/"


const Routes = () => (
    <BrowserRouter>
        <Switch>
            
            <Route exact path={"/"} component= {Home} />
            <Route path={"/detalhes"} component= {Detalhes} />
            <Route path={"/login"} component= {Login} /> 
            <Route path={"/cadastro"} component= {Cadastro} />  
            <Route path={"/carrinho"} component= {Carrinho} />
            <Route path={"/pagamento"} component= {Pagamento} /> 
        </Switch>
    </BrowserRouter>
);



export default Routes;