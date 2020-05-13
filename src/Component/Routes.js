import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import Home from "../Routes/Home";
import Deatail from "../Routes/Detail";
const Routes =  () =>(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail" component={Deatail}/>
        <Redirect from="*" to ="/" />
    </Switch>
);


const appRouter = () => (
        <Routes /> 
    );


export default appRouter;