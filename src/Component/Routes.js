import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import Home from "../Routes/Home";
import Deatail from "../Routes/Detail";
import Cart from "../Routes/Cart";

const Routes =  () =>(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail/:id" component={Deatail}/>
        <Route exact path="/cart" component={Cart}/>

        <Redirect from="*" to ="/" />
    </Switch>
);


const appRouter = () => (
        <Routes /> 
    );


export default appRouter;